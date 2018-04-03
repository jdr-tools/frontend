const servicesFactory = function servicesFactoryFunction (Api) {
  'ngInject'
  
  const vm = this

  vm.list = (callback) => {
    Api.get('/services', {}, {successCallback: callback})
  }

  return vm
}

export default servicesFactory
