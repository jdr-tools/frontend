const chatroomController = function chatroomControllerFunction ($localStorage, $scope, $state, FormService) {
  'ngInject'

  const vm = this

  /**
   * Stores the current username to display its message diffenrently.
   * @var {String} username
   */
  vm.username = $localStorage.account.username

  /**
   * Returns the URL for the template corresponding to a given command.
   * @param {Object} command - a command as returned by the API.
   * @return {String} the URL for the template corresponding to the command.
   */
  vm.getCommandTemplate = (command) => {
    return `/client/src/modules/app/campaigns/play/commands/${command.data.command}/include.html`
  }

  /**
   * Scrolls the list of messages to get to the bottom of it.
   */
  vm.scrollMessages = () => {
    const elements = $('#chatroom-scroller')
    if (elements.length > 0) {
      elements[0].scrollTop = elements[0].scrollHeight
    }
  }

  /**
   * Submits the form to create a new message in the current campaign.
   */
  vm.sendMessage = () => vm.campaign.addMessage(vm.message)

  $scope.$on('messages.scroll', vm.scrollMessages)

  $scope.$on('message.created', (event, message) => {
    if (message.campaign_id === $state.params.id) {
      FormService.reset(vm.sendMessageForm)
      vm.campaign.insertMessage(message)
      vm.message = ''
      vm.scrollMessages()
    }
  })

  $scope.$on('command.failed', (event, error) => {
    FormService.reset(vm.sendMessageForm)
    vm.sendMessageForm.message.$setValidity(error.data.field, false)
  })
}

export default {
  controller: chatroomController,
  controllerAs: 'vm',
  templateUrl: '/client/src/modules/app/campaigns/play/panels/chatroom/chatroom.html',
  bindings: {
    campaign: '='
  }
}