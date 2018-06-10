import Authentication from './permissions/authentication'
import Confirmation from './utils/confirmation'
import Permissions from './permissions/permissions'
import Api from './api/api'
import ErrorsService from './forms/errors_service'
import FormService from './forms/forms_service'

const services = angular.module('arkaan.frontend.services', [])
  .service('Authentication', Authentication)
  .service('Confirmation', Confirmation)
  .service('Permissions', Permissions)
  .service('Api', Api)
  .service('ErrorsService', ErrorsService)
  .service('FormService', FormService)
  .name

export default services
