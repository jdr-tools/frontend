const updateGroupController = function updateGroupControllerFunction (GroupsFactory) {
  'ngInject'

  const vm = this

  vm.groups = []

  vm.group = {slug: ''}

  vm.setGroups = (groups) => {
    vm.groups = groups.items
  }

  vm.getGroups = () => {
    GroupsFactory.list((vm.setGroups))
  }

  vm.createGroup = () => {
    GroupsFactory.create(vm.group, vm.getGroups)
  }

  vm.getGroups()
}

export default updateGroupController
