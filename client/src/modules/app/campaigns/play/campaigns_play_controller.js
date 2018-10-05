const campaignsPlayController = function campaignsPlayControllerFunction ($mdSidenav, $state) {
  'ngInject'

  const vm = this

  vm.openChatroom = () => {
    $mdSidenav('chat-sidenav').toggle();
  }
}

export default campaignsPlayController