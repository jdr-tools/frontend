const profileController = function profileControllerFunction ($filter, $localStorage, $mdToast, $timeout, $translate, Api) {
  'ngInject'

  const vm = this

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

  vm.success = () => {
    $translate.use(vm.account.language)
    $timeout(() => {
      const toast = $mdToast.simple()
        .position('bottom right')
        .textContent($filter('translate')('accounts.edit.toasts.success'))
        .hideDelay(2000)
      $mdToast.show(toast)
    })
    $localStorage.account = vm.account
    vm.initialize()
  }

  vm.submit = () => {
    Api.put('/accounts/own', vm.cleanAccount(), {
      successCallback: vm.success,
      errorForm: vm.profileEditionForm
    })
  }

  vm.initialize()
}

export default profileController
