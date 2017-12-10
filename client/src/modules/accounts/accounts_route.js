const accountsRoute = function ($stateProvider) {
  $stateProvider.state('accounts', {
    url: '/accounts',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/template.html',
        controller: 'accountsController as vm'
      }
    },
    resolve: {
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkUserSession()
      }
    }
  })
}

export default accountsRoute