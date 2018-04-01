/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const appMenuController = class MainMenu {
  constructor (Authentication, $localStorage, $rootScope) {
    'ngInject'
    this.auth = Authentication
    this.authenticated = Authentication.checkSessionKeysPresence(false)
    this.storage = $localStorage
    this.setUsername()

    const me = this
    $rootScope.$on('loginSuccessful', () => {
      me.authenticated = true
      me.setUsername()
    })
  }

  /** Logs the user out of the application and redirects him to the main page. */
  logout () {
    this.authenticated = false
    this.auth.destroyUserSession()
  }

  setUsername () {
    if (this.authenticated) {
      this.username = this.storage.account.username
    }
  }
}

const appMenuComponent = {
  controller: appMenuController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/menus/app/app_menu.html'
}

export default appMenuComponent
