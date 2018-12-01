import listsModels from './lists'
import modelsConcerns from './concerns'
import Service from './service'
import Campaign from './campaign'

export default angular.module('arkaan.frontend.models', [listsModels, modelsConcerns])
  .factory('Service', Service)
  .factory('Campaign', Campaign)
  .name