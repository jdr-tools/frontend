const chatroomController = function chatroomControllerFunction ($localStorage, $mdDialog, $mdSidenav, $scope, $state, $timeout, FormService) {
  'ngInject'

  const vm = this

  /**
   * Stores the current username to display its message diffenrently.
   * @var {String} username
   */
  vm.username = $localStorage.account.username

  /**
   * This list links the commands to other templates (for example roll:secret leads to the roll template)
   * @var {Object<String, String} templatesList
   */
  const templatesList = {'roll:secret' : 'roll'}

  /**
   * Closes the current panel, whatever panel is currently opened.
   */
  vm.closePanel = () => $mdSidenav('play-sidenav').close()

  /**
   * Displays the help modal to prompt the user with the available commands.
   * @param {Object} event - pass $event, this is used to set where the modal will open from.
   */
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
    const commandName = _.get(templatesList, command.data.command, command.data.command)
    return `/client/src/modules/app/campaigns/play/commands/${commandName}/include.html`
  }

  /**
   * Scrolls the list of messages to get to the bottom of it.
   */
  const scrollMessages = () => {
    $timeout(() => {
      const elements = $('#chatroom-scroller')
      if (elements.length > 0) {
        elements.animate({scrollTop: elements[0].scrollHeight}, 500)
      }
    })
  }

  const resetForm = () => {
    vm.message = ''
  }

  $scope.$watchCollection('vm.campaign.messages.items', scrollMessages)

  $scope.$on('messages.scroll', scrollMessages)

  $scope.$on('message.created', (event, message) => {
    if (message.campaign_id === $state.params.id) {
      vm.campaign.messages.insert(message)
      FormService.reset(vm.sendMessageForm)
      resetForm()
    }
  })

  $scope.$on('message.form.reset', resetForm)

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