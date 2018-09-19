/**
 * This service handles messages sent from the server throughout a websocket channel.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const websocketMessages = function websocketMessagesFunction ($rootScope) {
  'ngInject'

  const vm = this

  /**
   * Handles a message coming from a websocket, by transferring it to the correct sub-method.
   * @param {String} message - the text message giving the meaning of it.
   * @param {Object} data - additionnal data passed to the message and enriching it.
   */
  vm.handle = (message, data) => {
    switch(message) {
      case 'invitation_creation':
        $rootScope.$broadcast('invitation.creation', data)
        break
      case 'invitation_update':
        $rootScope.$broadcast('invitation.update', data)
        break;
    }
  }
}

export default websocketMessages
