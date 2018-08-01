const running = function runningFunction ($localStorage, WebsocketChannel) {
  'ngInject'
  if ($localStorage.token !== undefined) WebsocketChannel.setup()
}

export default running
