const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $scope, $state, $timeout, Api, Campaign, FormService) {
  'ngInject'

  const vm = this

  vm.campaign = new Campaign($state.params.id)

  vm.username = $localStorage.account.username

  vm.closeChatroom = () => {
    $mdSidenav('chat-sidenav').close()
  }

  vm.openChatroom = () => {
    $mdSidenav('chat-sidenav').toggle()
      vm.scrollMessages()
  }

  vm.sendMessage = () => vm.campaign.addMessage(vm.message)

  vm.scrollMessages = () => {
    $timeout(() => {
      const element = $('.md-chatroom-content')[0]
      element.scrollTop = element.scrollHeight
    }, 100)
  }

  vm.getTotal = (message) => {
    return _.sum(message.data.results) + message.data.modifier
  }

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

export default campaignsPlayController