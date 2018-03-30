/**
 * Controller for the registration page. It handles actions about creating an account, and the feedbacks to the user.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const accountsCreateController = function accountsCreateControllerFunction ($translate, Api, ErrorsService) {
  'ngInject'

  const vm = this

  vm.account = {
    username: '',
    password: '',
    password_confirmation: '',
    email: '',
    lastname: '',
    firstname: '',
    birthdate: new Date(1970, 0, 0)
  }
  vm.confirmation = false
  vm.errors = false

  /** Creates an account with the this.account variable. */
  vm.createAccount = () => {
    Api.post('/accounts', vm.account, {
      successCallback: vm.confirm,
      errorCallback: vm.displayErrors
    })
  }

  /** When the account is successfully created, this method shows a confirmation message to the user. */
  vm.confirm = () => {
    vm.confirmation = true
    vm.errors = false
  }

  /**
   * When the registration fails, this method displays a list of error concerning the process.
   * @return {Array<String>} a list of error string keys returned by the api. These keys should be translated.
   */
  vm.displayErrors = (response) => ErrorsService.append(vm.accountCreationForm, response)
}

export default accountsCreateController
