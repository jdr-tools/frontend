const categoriesFactory = function CategoriesFactory(Api) {
  const vm = this

  vm.create = (category, callback) => {
    Api.post('/categories', category, {successCallback: callback})
  }

  vm.delete = (category_id, callback) => {
    Api.delete(`/categories/${category_id}`, {successCallback: callback})
  }

  vm.list = (callback) => {
    Api.get('/categories', {}, {successCallback: callback})
  }

  return vm
}

export default categoriesFactory