import ErrorsService from './errors_service'
import FormService from './forms_service'

const forms = angular.module('arkaan.frontend.services.forms', [])
  .service('ErrorsService', ErrorsService)
  .service('FormService', FormService)
  .name

export default forms
