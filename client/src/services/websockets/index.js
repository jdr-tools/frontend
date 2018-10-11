import WebsocketChannel from './websocket_channel'
import WebsocketNotifier from './websocket_notifier'

const utils = angular.module('arkaan.frontend.services.websockets', [])
  .service('WebsocketChannel', WebsocketChannel)
  .service('WebsocketNotifier', WebsocketNotifier)
  .name

export default utils