const updateGroupController = function updateGroupControllerFunction ($stateParams, CategoriesFactory, GroupsFactory, ServicesFactory) {
  const vm = this

  vm.group = false

  vm.categories = []

  vm.getGroup = () => {
    GroupsFactory.get($stateParams.group_id, vm.setGroup)
  }

  vm.getCategories = () => {
    CategoriesFactory.list((categories) => {
      vm.categories = categories.items.map(vm.transformCategory)
    })
  }

  vm.getServices = () => {
    ServicesFactory.list((services) => {
      vm.services = services.items.map(vm.transformService)
    })
  }

  vm.transformCategory = (category) => {
    category.items = category.items.map((item) => {
      item.selected = (vm.group.rights.indexOf(item.id) >= 0)
      return item
    })
    return category
  }

  vm.transformService = (service) => {
    service.routes = service.routes.map((item) => {
      item.selected = (vm.group.routes.indexOf(item.id) >= 0)
      return item
    })
    return service
  }

  vm.updateRights = () => {
    const rights = []
    vm.categories.forEach((category) => {
      category.items.forEach((right) => {
        if (right.selected) rights.push(right.id)
      })
    })
    GroupsFactory.updateRights(vm.group.id, rights, vm.getGroup)
  }

  vm.updateRoutes = () => {
    const routes = []
    vm.services.forEach((service) => {
      service.routes.forEach((right) => {
        if (right.selected) routes.push(right.id)
      })
    })
    GroupsFactory.updateRoutes(vm.group.id, routes, vm.getGroup)
  }

  vm.setGroup = (group) => {
    vm.group = group
    vm.getCategories()
    vm.getServices()
  }

  vm.getGroup()
}

export default updateGroupController
