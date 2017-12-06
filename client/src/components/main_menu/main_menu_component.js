/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const mainMenuController = class MainMenu {
  constructor (Authentication, $localStorage) {
    'ngInject'
    this.authenticated = Authentication.checkUserSession($localStorage.username, $localStorage.token)
  }
}

const mainMenuComponent = {
  controller: mainMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/main_menu/main_menu.html'
}

export default mainMenuComponent
