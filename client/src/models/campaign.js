export default function campaignFactory ($filter, $localStorage, Api, WebsocketNotifier) {
  'ngInject'

  return class Campaign {
    constructor (id) {
      const vm = this
      vm.commandRegex = /^\/[a-z]+( .*)?$/
      Api.get(`/campaigns/${id}`, {}, {successCallback: (response) => Object.assign(vm, response)})
      Api.get(`/campaigns/${id}/messages`, {}, {
        successCallback: (response) => {
          vm.messages = _.groupBy(response, message => {
            return $filter('date')(message.created_at, 'yyyy-MM-dd')
          })
        }
      })
      Api.get(`/campaigns/${id}/files`, {}, {
        successCallback: response => {
          vm.files = response
        }
      })
    }

    insertMessage (message) {
      const vm = this
      const parsedCreatedAt = $filter('date')(message.created_at, 'yyyy-MM-dd')
      if (!_.has(vm.messages, parsedCreatedAt)) {
        vm.messages[parsedCreatedAt] = []
      }
      this.messages[parsedCreatedAt].push(message)
    }

    addMessage (content) {
      const vm = this
      const params = {content: content}
      const options = {
        successCallback: (response) => {
          WebsocketNotifier.sendToCampaign(vm.id, 'message.created', Object.assign(response.item, {campaign_id: vm.id}))
        }
      }
      if (vm.commandRegex.test(content)) {
        options.errorBroadcast = 'command.failed'
        const splittedCommand = content.split(' ', 2)
        params.command = _.trim(splittedCommand[0], '/')
        if (splittedCommand[1] !== '') params.content = splittedCommand[1]
        Api.post(`/campaigns/${vm.id}/commands`, params, options)
      }
      else {
        Api.post(`/campaigns/${vm.id}/messages`, params, options)
      }
    }
  }
}