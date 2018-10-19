const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $state, Api, Campaign) {
  'ngInject'

  const vm = this

  vm.campaign = new Campaign($state.params.id)

  vm.username = $localStorage.account.username

  vm.closeChatroom = () => {
    $mdSidenav('chat-sidenav').close();
  }

  vm.openChatroom = () => {
    $mdSidenav('chat-sidenav').toggle();
  }

  vm.sendMessage = () => vm.campaign.addMessage(vm.message)
}

export default campaignsPlayController