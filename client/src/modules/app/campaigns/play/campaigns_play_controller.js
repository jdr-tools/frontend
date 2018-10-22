const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $scope, $state, $timeout, Api, Campaign) {
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
    return _.sum(message.results) + message.modifier
  }

  $scope.$on('message.created', (event, message) => {
    if (message.campaign_id === $state.params.id) {
      vm.campaign.insertMessage(message)
      vm.message = ''
      vm.scrollMessages()
    }
  })
}

export default campaignsPlayController