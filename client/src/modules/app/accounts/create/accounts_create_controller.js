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
      errorsForm: vm.accountCreationForm
    })
  }

  /** When the account is successfully created, this method shows a confirmation message to the user. */
  vm.confirm = () => {
    vm.confirmation = true
    vm.errors = false
  }
}

export default accountsCreateController
