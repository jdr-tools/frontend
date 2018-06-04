/**
 * Controller for the registration page. It handles actions about creating an account, and the feedbacks to the user.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const accountsCreateController = function accountsCreateControllerFunction ($mdToast, $state, $translate, Api, ErrorsService) {
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

  /** Creates an account with the this.account variable. */
  vm.createAccount = () => {
    Api.post('/accounts', vm.account, {
      successCallback: vm.confirm,
      errorsForm: vm.accountCreationForm
    })
  }

  /** When the account is successfully created, this method shows a confirmation message to the user. */
  vm.confirm = () => {
    const toast = $mdToast.simple()
      .position('bottom right')
      .textContent('Vous êtes maintenant inscrits, vous pouvez vous connecter.')
      .hideDelay(2000)
    $mdToast.show(toast)
    $state.go('sessionsCreate')
  }
<<<<<<< HEAD

  vm.onConfirmationChange = () => {
    vm.accountCreationForm['password'].$setTouched()
    vm.accountCreationForm['password'].$setValidity('confirmation', vm.account['password'] === vm.account['password_confirmation'])
  }

  /**
   * When the registration fails, this method displays a list of error concerning the process.
   * @return {Array<String>} a list of error string keys returned by the api. These keys should be translated.
   */
  vm.displayErrors = (response) => ErrorsService.append(vm.accountCreationForm, response)
=======
>>>>>>> fa60330d57126e56b33605300e2c0a61925adb05
}

export default accountsCreateController
