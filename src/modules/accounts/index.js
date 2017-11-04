import accountsController from './accounts_controller'
import accountsRoute from './accounts_route'

const accounts = angular.module('arkaan.frontend.accounts', [])
  .config(accountsRoute)
  .controller('accountsController', accountsController)
  .name

export default accounts