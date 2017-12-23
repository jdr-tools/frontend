const accountsRoute = function ($stateProvider) {
  'ngInject'

  const addTranslation = ($translatePartialLoader) => {
    'ngInject'
    $translatePartialLoader.addPart('accounts')
  }

  /** Virtual state for all accounts-related states. */
  $stateProvider.state({
    name: 'accounts',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      },
      /** Add the translation partial needed for his set of features. */
      translate: addTranslation
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
        'ngInject'
        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard')
      },
      /** This must be added here in addition to the virutal state because this one does not inherit from it. */
      translate: addTranslation
    }
  })
}

export default accountsRoute
