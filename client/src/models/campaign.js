export default function campaignFactory ($filter, $rootScope, $timeout, $localStorage, Api, WebsocketNotifier, Uploader, FilesList) {
  'ngInject'

  return class Campaign {
    constructor (id) {
      const vm = this
      vm.commandRegex = /^\/[a-z]+( .*)?$/
      vm.isCreator = false
      vm.hasMessages = false
      Api.get(`/campaigns/${id}`, {}, {
        successCallback: (response) => {
          Object.assign(vm, response)
          vm.isCreator = _.get($localStorage, 'account.username', false) == _.get(response, 'creator.username', true)
        }
      })
      Api.get(`/campaigns/${id}/messages`, {}, {
        successCallback: (response) => {
          vm.messages = _.groupBy(response, message => {
            return $filter('date')(message.created_at, 'yyyy-MM-dd')
          })
          vm.hasMessages = response.length > 0
        }
      })
      vm.files = new FilesList(id)
    }

    insertMessage (message) {
      const vm = this
      const parsedCreatedAt = $filter('date')(message.created_at, 'yyyy-MM-dd')
      if (!_.has(vm.messages, parsedCreatedAt)) {
        vm.messages[parsedCreatedAt] = []
      }
      this.messages[parsedCreatedAt].push(message)
      $timeout(() => $rootScope.$broadcast('messages.scroll'), 200)
    }

    insertFile (file) {
      this.files.insert(file)
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

    addFile (content) {
      const vm = this
      Uploader.uploadFileObject(`/campaigns/${vm.id}/files`, content, {
        successCallback: (response) => {
          WebsocketNotifier.sendToCampaign(vm.id, 'campaign.file.added', Object.assign(response, {campaign_id: vm.id}))
        }
      })
    }

    removeFile (file) {
      _.remove(this.files, f => {
        return (f.id == file.id)
      })
    }
  }
}