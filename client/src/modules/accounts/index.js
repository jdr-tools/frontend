import accountsListController from './list/accounts_list_controller'
import accountsRoute from './accounts_route'

const accounts = angular.module('arkaan.frontend.accounts', [])
  .controller('accountsListController', accountsListController)
  .config(accountsRoute)
  .name

export default accounts
