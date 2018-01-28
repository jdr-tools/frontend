import accountsListController from './list/accounts_list_controller'
import accountsCreateController from './create/accounts_create_controller'

import accountsRoute from './accounts_route'

const accounts = angular.module('arkaan.frontend.accounts', [])
  .controller('accountsListController', accountsListController)
  .controller('accountsCreateController', accountsCreateController)
  .config(accountsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('accounts'))
  .name

export default accounts
