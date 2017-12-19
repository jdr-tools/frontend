/**
 * This service handles all actions regarding the construction, destruction, and checking of the user sessions.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Authentication = class AuthenticationClass {

  constructor (Api, $localStorage, $rootScope, $state) {
    'ngInject'
    this.storage = $localStorage
    this.api = Api
    this.state = $state
    this.scope = $rootScope
  }

  /**
   * Checks the user session to know if the user is correctly connected, or if its session should be resetted.
   * If the session is considered invalid, it's resetted and the user is redirected to the login.
   * The session is considered invalid in three cases :
   * - the :username key or the :token key are not in the locale storage
   * - the session is considered invalid (see the dedicated method to know about about session validity)
   */
  checkAndRedirect () {
    return this.checkSessionKeysPresence() && this.checkForInvalidSession()
  }

  /**
   * Checks if the session is currently empty (the needed keys are not in the locale storage).
   * If the session is empty, it redirects the user to the login page.
   */
  checkSessionKeysPresence (redirectIfError = true) {
    const hasBothKeys = !!this.storage.username && !!this.storage.token
    if (!hasBothKeys && redirectIfError) this.destroyUserSession()
    return hasBothKeys
  }

  /**
   * Checks for an invalid session. A session can be invalid in two cases :
   * - the sessions API returns any error while trying to get the session for the locale storage :token key
   * - the sessions API return a session with a different username that the one stored in the locale storage
   */
  checkForInvalidSession () {
    this.api.get(`/sessions/${this.storage.token}`, {
      successCallback: this.checkForHijackedSession,
      errorCallback: this.destroyUserSession
    })
  }

  /**
   * There is a case where the user could have taken the token of another user, we have a chance to detect it if the session
   * is associated to the wrong user, though this case should probably never happen.
   * @param {Object} response - the response from the sessions API.
   */
  checkForHijackedSession (response) {
    if (response.username != this.storage.username) this.destroyUserSession()
  }

  /**
   * Creates a user session with the given parameters
   * @param {String} username - the username to create the session with.
   * @param {String} token - the password of the user, used to identify him server-side.
   */
  createUserSession (username, password) {
    const me = this
    const successCallback = (response) => {
      me.storage.username = username
      me.storage.token = response.token
      me.scope.$broadcast('loginSuccessful')
      me.state.go('dashboard', {}, {reload: true})
    }
    this.api.post('/sessions', {username: username, password: password}, {successCallback: successCallback})
  }

  /**
   * Destroys the current session and therefore disconnects the user.
   */
  destroyUserSession () {
    delete this.storage.username
    delete this.storage.token
    this.state.go('login', {}, {reload: true})
  }
}

export default Authentication
