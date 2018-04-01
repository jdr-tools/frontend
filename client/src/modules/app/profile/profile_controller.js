const profileController = function profileControllerFunction ($mdToast, Api, ErrorsService) {
  'ngInject'

  const vm = this

  /** The current date is used as a max date for the birth date datepicker. */
  vm.currentDate = new Date()

  vm.cleanAccount = () => {
    const account = angular.copy(vm.account)
    if (account.password == '') delete account.password
    if (account.password_confirmation == '') delete account.password_confirmation
    return account
  }

  vm.initialize = () => {
    Api.get('/accounts/own', {}, {successCallback: (response) => {
      vm.account = _.omit(response.account, 'rights')
    }})
  }

  vm.handleErrors = (response) => {
    ErrorsService.append(vm.profileEditionForm, response)
  }

  vm.success = () => {
    const toast = $mdToast.simple()
      .position('bottom right')
      .textContent('Compte mis à jour avec succès')
      .hideDelay(2000)
    $mdToast.show(toast)
    vm.initialize()
  }

  vm.submit = () => {
    Api.put('/accounts/own', vm.cleanAccount(), {
      successCallback: vm.success,
      errorCallback: vm.handleErrors
    })
  }

  vm.initialize()
}

export default profileController
