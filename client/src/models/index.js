import listsModels from './lists'
import Service from './service'

export default angular.module('arkaan.frontend.models', [listsModels])
  .factory('Service', Service)
  .name