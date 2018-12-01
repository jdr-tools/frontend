import Service from './service'
import Campaign from './campaign'
import Message from './message'

export default angular.module('arkaan.frontend.models.items', [])
  .factory('Campaign', Campaign)
  .factory('Message', Message)
  .factory('Service', Service)
  .name