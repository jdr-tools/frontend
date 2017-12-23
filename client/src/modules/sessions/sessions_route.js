const loginRoute = function ($stateProvider) {
  $stateProvider.state({
    name: 'sessionsCreate',
    url: '/sessions/new',
    views: {
      'main@': {
        templateUrl: 'src/modules/sessions/create/sessions_create.html',
        controller: 'sessionsCreateController as vm'
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
