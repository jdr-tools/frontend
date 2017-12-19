/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const mainMenuController = class MainMenu {
  constructor (Authentication, $rootScope) {
    'ngInject'
    this.auth = Authentication
    this.authenticated = Authentication.checkSessionKeysPresence(false)

    const me = this
    $rootScope.$on('loginSuccessful', () => { me.authenticated = true })
  }

  /** Logs the user out of the application and redirects him to the main page. */
  logout () {
    this.auth.destroyUserSession()
    this.authenticated = false
  }
}

const mainMenuComponent = {
  controller: mainMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/main_menu/main_menu.html'
}

export default mainMenuComponent
