const websocketChannel = function websocketChannelFunction ($http, $localStorage) {
  'ngInject'

  this.websocket = null

  this.setup = () => {
    if (this.websocket === undefined) {
      $http.get('/websocket').then((response) => {
        this.websocket = new WebSocket(`${response.data.url}websockets?session_id=${$localStorage.token}`)
        this.websocket.onmessage = (body) => {
          this.handleMessage(body.message, body.data)
        }
      })
    }
  }

  this.handleMessage = (message, data) => {
    console.log(message, data)
  }
}

export default websocketChannel
