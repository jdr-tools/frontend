const dashboardRoute = function ($stateProvider) {
  'ngInject'

  /** Route to display the main page of the application, thus named "dashboard". */
  $stateProvider.state({
    name: 'dashboard',
    url: '/dashboard',
    views: {
      'main@': {
        templateUrl: 'src/modules/dashboard/dashboard.html',
        controller: 'dashboardController as vm'
      }
    }
  })
}

export default dashboardRoute
