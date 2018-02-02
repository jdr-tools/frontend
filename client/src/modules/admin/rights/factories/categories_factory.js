const categoriesFactory = function CategoriesFactory(Api) {
  const vm = this

  vm.create = (category, callback) => {
    Api.post('/rights/categories', category, {successCallback: callback})
  }

  vm.delete = (category_id, callback) => {
    Api.delete(`/rights/categories/${category_id}`, {successCallback: callback})
  }

  return vm
}

export default categoriesFactory