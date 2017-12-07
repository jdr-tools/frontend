/**
 * Controller for the login screen.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const loginController = class LoginController {
  constructor(Authentication) {
    'ngInject'
    this.username = ''
    this.password = ''
    this.auth = Authentication
  }

  authenticate () {
    this.auth.createUserSession(this.username, this.password)
  }
  
}

export default loginController