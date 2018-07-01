/**
 * This service handles all actions regarding the construction, destruction, and checking of the user sessions.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Authentication = function authenticationFunction ($localStorage, $rootScope, $state, $timeout, Api, AccountsFactory) {
    'ngInject'

    const vm = this

  /**
   * Checks the user session to know if the user is correctly connected, or if its session should be resetted.
   * If the session is considered invalid, it's resetted and the user is redirected to the login.
   * The session is considered invalid in three cases :
   * - the :username key or the :token key are not in the locale storage
   * - the session is considered invalid (see the dedicated method to know about about session validity)
   */
  vm.checkAndRedirect = () => {
    return vm.checkSessionKeysPresence() && vm.checkForInvalidSession()
  }

  /**
   * Checks if the session is currently empty (the needed keys are not in the locale storage).
   * If the session is empty, it redirects the user to the login page.
   */
  vm.checkSessionKeysPresence = (redirectIfError = true) => {
    const hasBothKeys = !!$localStorage.account && !!$localStorage.token
    if (!hasBothKeys && redirectIfError) vm.destroyUserSession()
    return hasBothKeys
  }

  /**
   * Checks for an invalid session. A session can be invalid in two cases :
   * - the sessions API returns any error while trying to get the session for the locale storage :token key
   * - the sessions API return a session with a different username that the one stored in the locale storage
   */
  vm.checkForInvalidSession = () => {
    Api.get(`/sessions/${$localStorage.token}`, {}, {
      successCallback: vm.checkForHijackedSession,
      errorCallback: vm.destroyUserSession
    })
  }

  /**
   * There is a case where the user could have taken the token of another user, we have a chance to detect it if the session
   * is associated to the wrong user, though vm case should probably never happen.
   * @param {Object} response - the response from the sessions API.
   */
  vm.checkForHijackedSession = (response) => {
    if (response.account_id != $localStorage.account.id) vm.destroyUserSession()
  }

  /**
   * Creates a user session with the given parameters
   * @param {String} username - the username to create the session with.
   * @param {String} token - the password of the user, used to identify him server-side.
   * @param {Boolean} remember - a flag indicating whether the user wants to be remembered or not.
   */
  vm.createUserSession = (username, password, remember, errorCallback) => {
    Api.post('/sessions', {username: username, password: password}, {
      successCallback: vm.sessionCreationSuccess,
      errorCallback: errorCallback,
      skipSessionId: true
    })
  }

  /**
   * Destroys the current session and therefore disconnects the user.
   */
  vm.destroyUserSession = () => {
    const destroyLocalSession = () => {
      delete $localStorage.account
      delete $localStorage.token
      $rootScope.$broadcast('disconnect')
      $timeout(() => $state.go('sessionsCreate'))
    }
    if ($localStorage.token === undefined) {
      destroyLocalSession()
    }
    else {
      Api.delete(`/sessions/${$localStorage.token}`, {
        successCallback: destroyLocalSession,
        errorCallback: (response) => {
          if (response.status === 404) destroyLocalSession()
        }
      })
    }
  }

  vm.sessionCreationSuccess = (session_response) => {
    $localStorage.token = session_response.token
    $timeout(() => {
      AccountsFactory.own((account_response) => {
        $localStorage.account = account_response.account
        $rootScope.$broadcast('loginSuccessful')
        $state.go('dashboard', {}, {reload: true})
      })
    })
  }
}

export default Authentication
