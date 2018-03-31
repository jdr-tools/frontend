const profileRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state('profile', {
    parent: 'app',
    url: '/profile',
    templateUrl: 'src/modules/app/profile/profile.html',
    controller: 'profileController as vm',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })
}

export default profileRoute
