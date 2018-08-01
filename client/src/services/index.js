import Api from './api/api'
import Authentication from './permissions/authentication'
import Confirmation from './utils/confirmation'
import ErrorsService from './forms/errors_service'
import FormService from './forms/forms_service'
import Permissions from './permissions/permissions'
import WebsocketChannel from './utils/websocket_channel'

const services = angular.module('arkaan.frontend.services', [])
  .service('Api', Api)
  .service('Authentication', Authentication)
  .service('Confirmation', Confirmation)
  .service('ErrorsService', ErrorsService)
  .service('FormService', FormService)
  .service('Permissions', Permissions)
  .service('WebsocketChannel', WebsocketChannel)
  .name

export default services
