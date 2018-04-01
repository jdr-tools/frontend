const dashboardRoute = function ($stateProvider) {
  'ngInject'

  /** Route to display the main page of the application, thus named "dashboard". */
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    parent: 'app',
    templateUrl: 'client/src/modules/app/dashboard/dashboard.html',
    controller: 'dashboardController as vm'
  })
}

export default dashboardRoute
