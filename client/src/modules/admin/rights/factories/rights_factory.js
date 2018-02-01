const rightsFactory = function RightsFactory(Api) {
  const vm = this

  vm.list = (callback) => {
    Api.get('/rights', {}, {successCallback: callback})
  }

  vm.createCategory = (category, callback) => {
    Api.post('/rights/categories', category, {successCallback: callback})
  }

  return vm
}

export default rightsFactory