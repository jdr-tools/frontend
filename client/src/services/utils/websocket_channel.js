/**
 * Service used to manage websockets throughout the application.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const websocketChannel = function websocketChannelFunction ($http, $interval, $timeout, $localStorage, websocketMessages) {
  'ngInject'

  const vm = this

  /** Interval at which keep alive pings are sent in the websocket. */
  const KEEP_ALIVE_INTERVAL = 20000

  /** Current websocket used by the user to trade data with the dedicated service. */
  vm.websocket = null
  /** Function to send a ping in the websocket at intervals to keep it from closing from idle. */
  vm.keepAlive = null

  /** Function called when closing the websocket, cancelling the sending on pings to keep it alive. */
  vm.onWsClose = () => $timeout.cancel(vm.keepAlive)

  /**
   * Method called when receiving a message from the websocket, parsing and transferring it.
   * @param {Object} event - the event containing the message and all associated informations.
   */
  vm.onWsMessage = (event) => {
    const body = JSON.parse(e.data)
    const message = body.message
    const data = body.data
    websocketMessages.handle(message, data)
  }

  /** Function called when creating the websocket, initializing the keep alive pings. */
  vm.onWsOpen = () => {
    vm.keepAlive = $interval(() => vm.websocket.send('REFRESH_PING'), 20000)
  }

  /**
   * Call this method when the user connects to the application to initialize the websocket.
   * Subsequent calls won't have any action on the websocket.
   */
  vm.setup = () => {
    if (vm.websocket === null) {
      /** Gets the address of the websocket service by requesting the load balancer. */
      $http.get('/websocket').then((response) => {
        /** Create a websocket connection to the given address. */
        vm.websocket = new WebSocket(`${response.data.url}/websockets?session_id=${$localStorage.token}`)
        /** Assigns the handlers to the dedicated actions on the websocket. */
        vm.websocket.onopen = vm.onWsOpen
        vm.websocket.onmessage = vm.onWsMessage
        vm.websocket.onclose = vm.onWsClose
      })
    }
  }
}

export default websocketChannel
