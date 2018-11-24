const accountsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state('accounts', {
    parent: 'app',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for creating an account. */
  $stateProvider.state('accountsCreate', {
    url: '/accounts/new',
    templateUrl: 'client/src/modules/app/accounts/create/accounts_create.html',
    controller: 'accountsCreateController as vm',
    resolve: {
      /** If the user is already authenticated, he shouldn't be able to access the account creation screen. */
      authentication: (Authentication, $state) => {
        'ngInject'
        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard')
      }
    }
  })
}

export default accountsRoute
