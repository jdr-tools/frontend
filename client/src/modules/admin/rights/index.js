import rightsListController from './list/rights_list_controller'
import rightsFactory from './factories/rights_factory'

import rightsRoute from './rights_route'

const rights = angular.module('arkaan.frontend.rights', [])
  .controller('rightsListController', rightsListController)
  .factory('RightsFactory', rightsFactory)
  .config(rightsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('rights'))
  .name

export default rights
