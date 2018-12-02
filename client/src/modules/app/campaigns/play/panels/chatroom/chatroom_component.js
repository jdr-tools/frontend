const chatroomController = function chatroomControllerFunction ($localStorage, $mdDialog, $scope, $state, $timeout, FormService) {
  'ngInject'

  const vm = this

  /**
   * Stores the current username to display its message diffenrently.
   * @var {String} username
   */
  vm.username = $localStorage.account.username

  vm.displayHelp = (event) => {
    $mdDialog.show({
      controller: function ($mdDialog, $scope) {
        $scope.close = () => $mdDialog.cancel()
      },
      templateUrl: '/client/src/modules/app/campaigns/play/panels/chatroom/help.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      fullscreen: false
    })
  }

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
      elements.animate({scrollTop: elements[0].scrollHeight}, 500)
    }
  }

  $scope.$watchCollection('vm.campaign.messages.items', () => {
    $timeout(vm.scrollMessages, 200)
  })

  $scope.$on('messages.scroll', vm.scrollMessages)

  $scope.$on('message.created', (event, message) => {
    if (message.campaign_id === $state.params.id) {
      FormService.reset(vm.sendMessageForm)
      vm.campaign.messages.insert(message)
      vm.message = ''
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