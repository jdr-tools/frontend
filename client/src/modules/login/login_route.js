const loginRoute = function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      'main@': {
        templateUrl: 'src/modules/login/template.html',
        controller: 'loginController as vm'
      }
    }
  })
}

export default loginRoute