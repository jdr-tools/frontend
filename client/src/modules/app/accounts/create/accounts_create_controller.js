/**
 * Controller for the registration page. It handles actions about creating an account, and the feedbacks to the user.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const accountsCreateController = function accountsCreateControllerFunction ($mdToast, $state, $translate, Api) {
  'ngInject'

  const vm = this

  vm.account = {
    username: '',
    password: '',
    password_confirmation: '',
    email: '',
    lastname: '',
    firstname: '',
    gender: 'neutral',
    language: 'french',
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

  vm.onConfirmationChange = () => {
    vm.accountCreationForm.password_confirmation.$setTouched()
    vm.accountCreationForm.password_confirmation.$setValidity(
      'confirmation',
      vm.account.password === vm.account.password_confirmation
    )
  }
}

export default accountsCreateController
