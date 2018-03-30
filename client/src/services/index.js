import Authentication from './permissions/authentication'
import Permissions from './permissions/permissions'
import Api from './api/api'
import ErrorsService from './forms/errors_service'

const services = angular.module('arkaan.frontend.services', [])
  .service('Authentication', Authentication)
  .service('Permissions', Permissions)
  .service('Api', Api)
  .service('ErrorsService', ErrorsService)
  .name

export default services
