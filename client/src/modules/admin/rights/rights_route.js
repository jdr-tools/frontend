const rightsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state('rights', {
    parent: 'admin',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state('rightsList', {
    url: '/rights',
    parent: 'rights',
    templateUrl: 'client/src/modules/admin/rights/list/rights_list.html',
    controller: 'rightsListController as vm',
    resolve: {
      right: (Permissions) => {
        'ngInject'
        Permissions.checkAndRedirect('administration.rights', 'adminDashboard')
      }
    }
  })
}

export default rightsRoute
