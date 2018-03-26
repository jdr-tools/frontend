/**
 * This service handles all actions regarding the construction, destruction, and checking of the user sessions.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Authentication = class AuthenticationClass {

  constructor (Api, AccountsFactory, $localStorage, $rootScope, $state) {
    'ngInject'
    this.storage = $localStorage
    this.api = Api
    this.accounts = AccountsFactory
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
    const hasBothKeys = !!this.storage.account && !!this.storage.token
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
    if (response.username != this.storage.account.username) this.destroyUserSession()
  }

  /**
   * Creates a user session with the given parameters
   * @param {String} username - the username to create the session with.
   * @param {String} token - the password of the user, used to identify him server-side.
   * @param {Boolean} remember - a flag indicating whether the user wants to be remembered or not.
   */
  createUserSession (username, password, remember) {
    const me = this
    const successCallback = (session_response) => {
      /** The username is remembered only if the user wants to remember it. */
      if (remember) this.storage.remember = username
      me.storage.token = session_response.token
      me.accounts.get(session_response.account_id, (account_response) => {
        me.storage.account = account_response.account
        me.scope.$broadcast('loginSuccessful')
        me.state.go('dashboard', {}, {reload: true})
      })
    }
    this.api.post('/sessions', {username: username, password: password}, {successCallback: successCallback, skipSessionId: true})
  }

  /**
   * Destroys the current session and therefore disconnects the user.
   */
  destroyUserSession () {
    const me = this
    this.api.delete(`/sessions/${me.storage.token}`, {successCallback: () => {
      delete me.storage.account
      delete me.storage.token
      me.state.go('sessionsCreate')
    }})
  }
}

export default Authentication
