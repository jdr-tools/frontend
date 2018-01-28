/**
 * Controller for the registration page. It handles actions about creating an account, and the feedbacks to the user.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const accountsCreateController = class AccountsCreateController {
  constructor(Api, $translate) {
    'ngInject'
    this.account = {
      username: '',
      password: '',
      password_confirmation: '',
      email: '',
      lastname: '',
      firstname: '',
      birthdate: new Date(1970, 0, 0)
    }
    this.api = Api
    this.confirmation = false
    this.errors = false
  }

  /** Creates an account with the this.account variable. */
  createAccount () {
    const me = this
    this.api.post('/accounts', this.account, {
      successCallback: () => me.confirm(),
      errorCallback: (response) => me.displayErrors(response)
    })
  }

  /** When the account is successfully created, this method shows a confirmation message to the user. */
  confirm () {
    this.confirmation = true
    this.errors = false
  }

  /**
   * When the registration fails, this method displays a list of error concerning the process.
   * @return {Array<String>} a list of error string keys returned by the api. These keys should be translated.
   */
  displayErrors (response) {
    this.errors = response.errors
    this.confirmation = false
  }
}

export default accountsCreateController
