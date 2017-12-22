const accountsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state({
    name: 'accounts',
    resolve: {
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state({
    name: 'accountsList',
    url: '/accounts',
    parent: 'accounts',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/list/accounts_list.html',
        controller: 'accountsListController as vm'
      }
    }
  })

  /** Concrete state for creating an account. */
  $stateProvider.state({
    name: 'accountsCreate',
    url: '/accounts/new',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/create/accounts_create.html',
        controller: 'accountsCreateController as vm'
      }
    },
    resolve: {
      /** If the user is already authenticated, he shouldn't be able to access the account creation screen. */
      authentication: (Authentication, $state) => {
        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard')
      }
    }
  })
}

export default accountsRoute
