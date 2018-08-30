import Confirmation from './confirmation'
import WebsocketChannel from './websocket_channel'
import websocketMessages from './websocket_messages'

const utils = angular.module('arkaan.frontend.services.utils', [])
  .service('Confirmation', Confirmation)
  .service('WebsocketChannel', WebsocketChannel)
  .service('websocketMessages', websocketMessages)
  .name

export default utils