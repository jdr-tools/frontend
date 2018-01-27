const rightsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state({
    name: 'rights',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state({
    name: 'rightsList',
    url: '/rights',
    parent: 'rights',
    views: {
      'main@': {
        templateUrl: 'src/modules/rights/list/rights_list.html',
        controller: 'rightsListController as vm'
      }
    }
  })
}

export default rightsRoute
