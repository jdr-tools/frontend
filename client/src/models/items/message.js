export default function messageFactory ($timeout, Api, WebsocketNotifier) {
  'ngInject'

  const message = function messageFunction(rawData) {
    const vm = this

    /** The state of the message can either be "sending", "sent" or "error" */
    vm.state = 'started'

    /**
     * Builds a message from the raw data returned by the API in a messages' list.
     * @param {Object} rawData - a message object returned by the API.
     */
    vm.constructor = (rawData) => {
      Object.assign(vm, {state: 'sent'}, rawData)
    }

    /**
     * Sends the content of the current message on the API, the route called depending on the
     * actual content of the message (either plain text, or a command.)
     */
    vm.send = () => {
      vm.state = 'sending'
      const successCallback = (response) => {
        vm.state = 'sent'
        const message = Object.assign(vm, response.item, {campaign_id: vm.campaign_id})
        WebsocketNotifier.sendToCampaign(vm.campaign_id, 'message.created', message)
      }
      const errorCallback = () => {
        $timeout(() => {
          vm.state = 'error'
        }, 1000)
      }
      const method = `sendAs${vm.type.charAt(0).toUpperCase() + vm.type.slice(1)}`
      vm[method](successCallback, errorCallback)
    }

    /**
     * Sends the message as a plain text message
     * @param {function} successCallback - the function called when the method succeds.
     * @param {function} errorCallback - the function called in case of error from the API.
     */
    vm.sendAsText = (successCallback, errorCallback) => {
      Api.post(`/campaigns/${vm.campaign_id}/messages`, {content: vm.data.content}, {
        errorCallback: errorCallback,
        successCallback: successCallback
      })
    }

    /**
     * Parses and sends the message as a command to the API.
     * @param {function} successCallback - the function called when the method succeds.
     * @param {function} errorCallback - the function called in case of error from the API.
     */
    vm.sendAsCommand = (successCallback, errorCallback) => {
      const command = vm.data.content.split(' ', 2)
      const parameters = {
        command: _.trim(command[0], '/'),
        content: command[1]
      }
      Api.post(`/campaigns/${vm.campaign_id}/commands`, parameters, {
        successCallback: successCallback,
        errorCallback: errorCallback,
        errorBroadcast: 'command.failed'
      })
    }

    vm.constructor(rawData)
  }

  return (message)
}