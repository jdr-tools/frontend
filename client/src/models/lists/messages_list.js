export default function messagesListFactory (Api, CampaignItemsList, WebsocketNotifier) {
  'ngInject'

  /**
   * A list of message represents the messages sent and received in the chatroom of a campaign.
   * @author Vincent Courtois <courtois.vincent@outlook.com>
   */
  const messagesList = function messagesListFunction (campaign_id) {
    const vm = this

    vm.commandRegex = /^\/[a-z]+( .*)?$/

    vm.successCallback = response => {
      vm.items = response
      vm.afterInsert()
    }

    /**
     * Method called after the insertion of a new element, refreshing the grouped messages.
     */
    vm.afterInsert = () => {
      vm.grouped = _.groupBy(vm.items, message => (new Date(message.created_at)).toDateString())
    }

    vm.send = (content) => {
      const successCallback = (response) => {
        WebsocketNotifier.sendToCampaign(vm.campaign_id, 'message.created', Object.assign(response.item, {campaign_id: vm.campaign_id}))
      }
      vm[vm.commandRegex.test(content) ? 'sendCommand' : 'sendText'](content, successCallback)
    }

    vm.sendText = (content, successCallback) => {
      Api.post(`/campaigns/${vm.campaign_id}/messages`, {content: content}, {successCallback: successCallback})
    }

    vm.sendCommand = (content, successCallback) => {
      const command = content.split(' ', 2)
      const parameters = {
        command: _.trim(command[0], '/'),
        content: command[1]
      }
      Api.post(`/campaigns/${vm.campaign_id}/commands`, parameters, {
        successCallback: successCallback,
        errorBroadcast: 'command.failed'
      })
    }

    CampaignItemsList.call(vm, campaign_id, 'messages')
  }

  return (messagesList)
}