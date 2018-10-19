import listsModels from './lists'
import Service from './service'
import Campaign from './campaign'

export default angular.module('arkaan.frontend.models', [listsModels])
  .factory('Service', Service)
  .factory('Campaign', Campaign)
  .name