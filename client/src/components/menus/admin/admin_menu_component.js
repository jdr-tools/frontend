/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const adminMenuController = class MainMenu {
  constructor (Authentication, $rootScope) {
    'ngInject'
    this.auth = Authentication
    this.authenticated = Authentication.checkSessionKeysPresence(false)
  }
}

const adminMenuComponent = {
  controller: adminMenuController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/menus/admin/admin_menu.html'
}

export default adminMenuComponent
