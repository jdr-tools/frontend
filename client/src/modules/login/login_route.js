const loginRoute = function ($stateProvider) {
  $stateProvider.state({
    name: 'login',
    url: '/login',
    views: {
      'main@': {
        templateUrl: 'src/modules/login/template.html',
        controller: 'loginController as vm'
      }
    },
    resolve: {
      authentication: (Authentication, $state) => {
        'ngInject'
        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard')
      }
    }
  })
}

export default loginRoute
