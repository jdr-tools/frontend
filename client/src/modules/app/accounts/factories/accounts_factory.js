const accountsFactory = function accountsFactoryFunction (Api) {
  'ngInject'

  const vm = this

  vm.get = (account_id, callback) => {
    Api.get(`/accounts/${account_id}`, {}, {successCallback: callback})
  }

  return vm
}

export default accountsFactory