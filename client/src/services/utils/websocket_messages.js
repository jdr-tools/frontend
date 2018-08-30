/**
 * This service handles messages sent from the server throughout a websocket channel.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const websocketMessages = function websocketMessagesFunction () {
  'ngInject'

  const vm = this

  /**
   * Handles a message coming from a websocket, by transferring it to the correct sub-method.
   * @param {String} message - the text message giving the meaning of it.
   * @param {Object} data - additionnal data passed to the message and enriching it.
   */
  vm.handle = (message, data) => {
    console.log(message, data)
  }
}

export default websocketMessages
