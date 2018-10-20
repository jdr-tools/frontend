export default function campaignFactory ($localStorage, Api, WebsocketNotifier) {
  'ngInject'

  return class Campaign {
    constructor (id) {
      const vm = this
      Api.get(`/campaigns/${id}`, {}, {successCallback: (response) => Object.assign(vm, response)})
      Api.get(`/campaigns/${id}/messages`, {}, {
        successCallback: (response) => {
          vm.messages = response
        }
      })
    }

    insertMessage (message) {
      this.messages.push(message)
    }

    addMessage (content)  {
      const vm = this
      const params = {content: content}
      const options = {
        successCallback: (response) => {
          WebsocketNotifier.sendToCampaign(vm.id, 'message.created', Object.assign(response.item, {campaign_id: vm.id}))
        }
      }
      Api.post(`/campaigns/${vm.id}/messages`, params, options)
    }
  }
}