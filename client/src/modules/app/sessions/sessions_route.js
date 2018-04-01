const loginRoute = function ($stateProvider) {
  $stateProvider.state('sessionsCreate', {
    url: '/sessions/new',
    parent: 'app',
    templateUrl: 'client/src/modules/app/sessions/create/sessions_create.html',
    controller: 'sessionsCreateController as vm',
    resolve: {
      authentication: (Authentication, $state) => {
        'ngInject'
        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard')
      }
    }
  })
}

export default loginRoute
