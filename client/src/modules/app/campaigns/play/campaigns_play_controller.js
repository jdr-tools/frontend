const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $scope, $state, Api, Campaign) {
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

  $scope.$on('message.created', (event, data) => {
    if (data.campaign_id === $state.params.id) {
      vm.campaign.insertMessage(_.pick(data, ['username', 'content']))
    }
  })
}

export default campaignsPlayController