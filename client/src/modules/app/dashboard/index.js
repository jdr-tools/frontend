import dashboardController from './dashboard_controller'
import dashboardRoute from './dashboard_route'
import dashboardComponents from './components'

const dashboard = angular.module('arkaan.frontend.dashboard', [dashboardComponents])
  .config(dashboardRoute)
  .controller('dashboardController', dashboardController)
  .name

export default dashboard