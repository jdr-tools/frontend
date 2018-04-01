const adminDashboardRoute = function ($stateProvider) {
  'ngInject'

  /** Route to display the main page of the application, thus named "dashboard". */
  $stateProvider.state('adminDashboard', {
    url: '/admin',
    parent: 'admin',
    templateUrl: 'client/src/modules/admin/dashboard/admin_dashboard.html',
    controller: 'adminDashboardController as vm'
  })
}

export default adminDashboardRoute
