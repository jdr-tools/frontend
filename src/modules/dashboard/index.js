import dashboardController from './dashboard_controller'
import dashboardRoute from './dashboard_route'

const dashboard = angular.module('arkaan.frontend.dashboard', [])
  .config(dashboardRoute)
  .controller('dashboardController', dashboardController)
  .name

export default dashboard