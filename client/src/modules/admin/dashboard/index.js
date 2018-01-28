import adminDashboardController from './admin_dashboard_controller'
import adminDashboardRoute from './admin_dashboard_route'

const adminDashboard = angular.module('arkaan.frontend.admin.dashboard', [])
  .config(adminDashboardRoute)
  .controller('adminDashboardController', adminDashboardController)
  .name

export default adminDashboard