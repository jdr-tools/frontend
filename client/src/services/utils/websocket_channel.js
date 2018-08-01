const websocketChannel = function websocketChannelFunction ($http, $interval, $timeout, $localStorage) {
  'ngInject'

  const vm = this

  vm.websocket = null

  vm.keepAlive = null

  vm.setup = () => {
    if (vm.websocket === null) {
      $http.get('/websocket').then((response) => {
        vm.websocket = new WebSocket(`${response.data.url}/websockets?session_id=${$localStorage.token}`)
        vm.websocket.onopen = () => {
          vm.keepAlive = $interval(() => vm.websocket.send('REFRESH_PING'), 20000)
        }
        vm.websocket.onmessage = (e) => {
          const body = JSON.parse(e.data)
          const message = body.message
          const data = body.data
          vm.handleMessage(message, data)
        }
        vm.websocket.onclose = () => {
          $timeout.cancel(vm.keepAlive)
        }
      })
    }
  }

  vm.handleMessage = (message, data) => {
    console.log(message, data)
  }
}

export default websocketChannel
