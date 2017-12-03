import Authentication from './authentication/authentication'
import Api from './api/api'

const services = angular.module('arkaan.services', [])
  .service('Authentication', Authentication)
  .service('Api', Api)
  .name

export default services
