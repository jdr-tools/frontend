const profileController = function profileControllerFunction (Api) {
  'ngInject'

  const vm = this

  vm.initialize = () => {
    Api.get('/accounts/own', {}, {successCallback: (response) => {
      vm.account = _.omit(response.account, 'rights')
    }})
  }

  vm.initialize()
}

export default profileController
