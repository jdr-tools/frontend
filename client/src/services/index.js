import Authentication from './permissions/authentication'
import Permissions from './permissions/permissions'
import Api from './api/api'

const services = angular.module('arkaan.frontend.services', [])
  .service('Authentication', Authentication)
  .service('Permissions', Permissions)
  .service('Api', Api)
  .name

export default services
