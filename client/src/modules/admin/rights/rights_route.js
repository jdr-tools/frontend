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
      },
      translation: ($translatePartialLoader) => {
        $translatePartialLoader.addPart('rights');
      }
    }
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state('rightsList', {
    url: '/rights',
    parent: 'rights',
    templateUrl: 'src/modules/admin/rights/list/rights_list.html',
    controller: 'rightsListController as vm'
  })
}

export default rightsRoute
