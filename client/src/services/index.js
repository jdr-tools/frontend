import Authentication from './authentication/authentication'
import Api from './api/api'

const services = angular.module('arkaan.frontend.services', [])
  .service('Authentication', Authentication)
  .service('Api', Api)
  .name

export default services
