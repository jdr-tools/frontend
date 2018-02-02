const rightsFactory = function RightsFactory(Api) {
  const vm = this

  vm.create = (category_id, right_slug, callback) => {
    Api.post('/rights', {category_id: category_id, slug: right_slug}, {successCallback: callback})
  }

  vm.delete = (right_id, callback) => {
    Api.delete(`/rights/${right_id}`, {successCallback: callback})
  }

  vm.list = (callback) => {
    Api.get('/rights', {}, {successCallback: callback})
  }

  return vm
}

export default rightsFactory