/**
 * Controller for the login screen.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const sessionsCreateController = function sessionCreateControllerFunction ($localStorage, Authentication) {
  'ngInject'

  const vm = this

  /** If the username has been already stored, and the user has successfully logged in with it, it's remembered. */
  vm.username = $localStorage.remember || ''
  vm.password = ''
  vm.remember = !!$localStorage.remember
  vm.auth = Authentication

  /** Called when the form is submitted, and creates the session for this user. */
  vm.authenticate = () => {
    Authentication.createUserSession(vm.username, vm.password, vm.remember)
  }
  
}

export default sessionsCreateController
