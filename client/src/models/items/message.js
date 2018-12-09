export default function messageFactory ($rootScope, $timeout, Api, WebsocketNotifier) {
  'ngInject'

  /**
   * This class represents a message as displayed in a chatroom. It has its internal content, timestamps,
   * user or state (sending, sent or error) to be displayed in the interface.
   * @author Vincent Courtois <courtois.vincent@outlook.com>
   */
  const message = class MessageClass {

    /**
     * Constructor of the class.
     * @param {Object} data - the data the message is built with.
     */
    constructor (data) {
      Object.assign(this, {state: 'sent'}, data)
    }

    /**
     * Sends the content of the current message on the API, the route called depending on the
     * actual content of the message (either plain text, or a command.)
     */
    send () {
      this.state = 'sending'
      const successCallback = (response) => {
        this.state = 'sent'
        WebsocketNotifier.sendToCampaign(this.campaign_id, 'message.created', this)
      }
      const errorCallback = () => {
        $rootScope.$broadcast('message.created', this)
        this.state = 'error'
      }
      const method = `sendAs${this.type.charAt(0).toUpperCase() + this.type.slice(1)}`
      
      this[method](successCallback, errorCallback)
    }

    /**
     * Sends the message as a plain text message
     * @param {function} successCallback - the function called when the method succeds.
     * @param {function} errorCallback - the function called in case of error from the API.
     */
    sendAsText (successCallback, errorCallback) {
      Api.post(`/campaigns/${this.campaign_id}/messages`, {content: this.data.content}, {
        errorCallback: errorCallback,
        successCallback: successCallback
      })
    }

    /**
     * Parses and sends the message as a command to the API.
     * @param {function} successCallback - the function called when the method succeds.
     * @param {function} errorCallback - the function called in case of error from the API.
     */
    sendAsCommand (successCallback, errorCallback) {
      const command = this.data.content.split(' ', 2)
      const parameters = {
        command: _.trim(command[0], '/'),
        content: command[1]
      }
      Api.post(`/campaigns/${this.campaign_id}/commands`, parameters, {
        successCallback: successCallback,
        errorCallback: errorCallback,
        errorBroadcast: 'command.failed'
      })
    }
  }

  return (message)
}