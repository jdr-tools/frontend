import rightsListController from './list/rights_list_controller'

import rightsRoute from './rights_route'

const rights = angular.module('arkaan.frontend.rights', [])
  .controller('rightsListController', rightsListController)
  .config(rightsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('rights'))
  .name

export default rights
