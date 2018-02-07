const updateGroupController = function updateGroupControllerFunction ($stateParams, CategoriesFactory, GroupsFactory, ServicesFactory) {
  const vm = this

  vm.group = false

  vm.categories = []

  vm.getGroup = () => {
    GroupsFactory.get($stateParams.id, vm.setGroup)
  }

  vm.getCategories = () => {
    CategoriesFactory.list((categories) => {
      vm.categories = vm.transformCollection(categories, 'rights')
    })
  }

  vm.getServices = () => {
    ServicesFactory.list((services) => {
      vm.services = vm.transformCollection(services, 'routes')
    })
  }

  vm.transformCollection = (collection, key) => {
    collection.items.map((item) => {
      item[key] = item[key].map((subitem) => {
        subitem.selected = (vm.group[key].indexOf(subitem.id) >= 0)
        return subitem
      })
      return item
    })
    return collection.items
  }

  vm.updateRights = () => {
    return vm.updateWithSelected(vm.categories, 'rights')
  }

  vm.updateRoutes = () => {
    return vm.updateWithSelected(vm.services, 'routes')
  }

  vm.updateWithSelected = (collection, key) => {
    const elements = []
    collection.forEach((service) => {
      service[key].forEach((element) => {
        if (element.selected) elements.push(element.id)
      })
    })
    const methodName = key.charAt(0).toUpperCase() + key.slice(1)
    GroupsFactory[`update${methodName}`](vm.group.id, elements, vm.getGroup)
  }

  vm.setGroup = (group) => {
    vm.group = group
    vm.getCategories()
    vm.getServices()
  }

  vm.getGroup()
}

export default updateGroupController
