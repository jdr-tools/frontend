/**
 * This service handles all actions regarding the construction, destruction, and checking of the user sessions.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Authentication = class AuthenticationClass {

  constructor ($localStorage) {
    'ngInject'
    this.storage = $localStorage
  }

  /**
   * Checks the user session to know if the user is correctly connected, or if its session should be resetted.
   * @param {String} username - the nickname of the user to check the session of.
   * @param {String} token - the session token for this user on this browser.
   * @return {Boolean} TRUE if the user session is currently valid, FALSE otherwise.
   */
  checkUserSession (username, token) {
    return !(this.storage.username !== undefined || this.storage.token !== undefined)
  }

  /**
   * Creates a user session with the given parameters
   * @param {String} username - the username to create the session with.
   * @param {String} token - the token of the session, identifying it server-side.
   */
  createUserSession (username, token) {
    this.storage.username = username
    this.storage.token = token
  }

  /**
   * Destroys the current session and therefore disconnects the user.
   */
  destroyUserSession () {
    delete this.storage.username
    delete this.storage.token
  }
}

export default Authentication
