export default function campaignsPlayController ($localStorage, $mdSidenav, $state, Campaign, $rootScope) {
  'ngInject'

  const vm = this

  /**
   * The campaign displayed in the interface.
   * @var {Object} campaign
   */
  vm.campaign = new Campaign($state.params.id)
  /**
   * The current username for the connected account.
   * @var {String} username
   */
  vm.username = $localStorage.account.username
  /**
   * The URL for the template of the main interface.
   * @var {String} interfaceURL
   */
  vm.interfaceURL = '/client/src/modules/app/campaigns/play/panels/interface.html'

  /**
   * Closes the current panel, whatever panel is currently opened.
   */
  vm.closePanel = () => $mdSidenav('play-sidenav').close()

  /**
   * Opens the designated panel. If the side panel is already opened, goes to this panel.
   * @param {String} panelType - the name of the panel to open, either 'chatroom' or 'file'.
   */
  vm.openPanel = (panelType) => {
    vm.displayedPanel = panelType
    vm.panelURL = `/client/src/modules/app/campaigns/play/panels/${panelType}/include.html`
    $mdSidenav('play-sidenav')
      .open()
      .then(() => {
        if (panelType == 'chatroom') $rootScope.$broadcast('messages.scroll')
      })
  }
}