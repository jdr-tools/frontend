export default function messagesListFactory ($localStorage, $timeout, Api, CampaignItemsList, Message, WebsocketNotifier) {
  'ngInject'

  /**
   * A list of message represents the messages sent and received in the chatroom of a campaign.
   * @author Vincent Courtois <courtois.vincent@outlook.com>
   */
  const messagesList = function messagesListFunction (campaign_id) {
    const vm = this

    /** The regular expression to identify if a message is supposed to be a command or not. */
    vm.commandRegex = /^\/[a-z]+( .*)?$/

    vm.successCallback = response => {
      vm.items = _.map(response, message => {
        const decoratedMessage = Object.assign(message, {state: 'sent'})
        return new Message(decoratedMessage)
      })
      vm.afterInsert()
    }

    /**
     * Method called after the insertion of a new element, refreshing the grouped messages.
     */
    vm.afterInsert = () => {
      vm.grouped = _.groupBy(vm.items, message => (new Date(message.created_at)).toDateString())
    }

    /**
     * This method creates a new message object with the given content, and then puts it in the messages list,
     * delegating the sending of the message to the message itself. The message will then update its internal state,
     * and thus the display, at each step of the sending process.
     *
     * @param {String} content - the text content of the message.
     */
    vm.send = (content) => {
      const message = new Message({
        username: $localStorage.account.username,
        created_at: new Date(),
        type: vm.commandRegex.test(content) ? 'command' : 'text',
        data: {
          content: content
        },
        created_at: new Date(),
        campaign_id: vm.campaign_id
      })
      message.send()
      vm.insert(message)
    }

    CampaignItemsList.call(vm, campaign_id, 'messages')

    /**
     * Inserts the given message in the messages list, triggering the regresh of the view.
     * @param {Object} message - the message object you want to insert in the messages list.
     */
    vm.insert = (message) => {
      if (_.find(vm.items, {id: message.id}) === undefined) {
        vm.items.push(message)
        vm.afterInsert()
      }
    }
  }

  return (messagesList)
}