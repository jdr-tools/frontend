const updateGroupController = function updateGroupControllerFunction ($mdSidenav, $rootScope, CategoriesFactory, GroupsFactory, ServicesFactory) {
  'ngInject'

  const vm = this

  /** The groups displayed in the list. */
  vm.groups = []
  /** The group pattern containing the fields sent when creating a group. */
  vm.group = {slug: ''}
  /** List of services, containing the routes. */
  vm.services = []
  /** List of categories, containing the rights. */
  vm.categories = []
  /** correspondance between the subkey names and the collections. */
  vm.typeCorrespondance = {'routes': 'services', 'rights': 'categories'}

  vm.createGroup = () => {
    GroupsFactory.create(vm.group, vm.getGroups)
  }

  vm.deleteGroup = (group_id) => {
    GroupsFactory.delete(group_id, vm.getGroups)
  }

  vm.editElements = (type, group, callback = false) => {
    $rootScope.$broadcast(`update_${type}`, group.id)
  }

  vm.getGroups = () => {
    GroupsFactory.list(vm.setGroups)
  }

  vm.setGroups = (groups) => {
    vm.groups = groups.items
  }

  $rootScope.$on('refreshGroupsList', vm.getGroups)

  /** Loads the list of services to display in the dedicated left panel. */
  ServicesFactory.list(services => { vm.services = services.items })
  /** Loads the list of categories to display in the dedicated left panel. */
  CategoriesFactory.list(categories => { vm.categories = categories.items })

  vm.getGroups()
}

export default updateGroupController
