/**
 * Component to control the left panels in the groups edition, to update routes and rights for a group.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const updateLeftPanel = function updateLeftPanelFunction ($mdSidenav, $rootScope, $scope, GroupsFactory) {
  'ngInject'

  const vm = this

  /** The unique identifier of the group currently edited, used to update on the API. */
  vm.groupId = false
  /** The correspondance for the field to accessin the titles. */
  vm.correspondance = {'rights': 'key', 'routes': 'slug'}

  /** we can declare the watcher only when the bindings are initialized. */
  $scope.$watch('vm.loopKey', () => {
    $scope.$on(`update_${vm.loopKey}`, (event, groupId) => {
      vm.groupId = groupId
      GroupsFactory.get(groupId, vm.selectElements)
    })
  })

  /**
   * Select elements in the panel if they are associated to the updated group.
   * @param [Object] group - the updated group, associated with elements of the panel.
   */
  vm.selectElements = (group) => {
    vm.collection = vm.collection.map((item) => {
      item[vm.loopKey] = _.map(item[vm.loopKey], subitem => {
        subitem.selected = group[vm.loopKey].indexOf(subitem.id) >= 0
        return subitem
      })
      return item
    })
    vm.toggle()
  }

  /** Launches the update of the current group on the API. */
  vm.update = () => {
    const elements = []
    vm.collection.forEach((element) => {
      element[vm.loopKey].forEach((item) => {
        if (item.selected) elements.push(item.id)
      })
    })
    const methodName = vm.loopKey.charAt(0).toUpperCase() + vm.loopKey.slice(1)
    GroupsFactory[`update${methodName}`](vm.groupId, elements, vm.close)
  }

  /** Toggles the panel to open or close. */
  vm.toggle = () => {
    $mdSidenav(`${vm.loopKey}-panel`).toggle()
  }

  /** Closes the panel after the update has been done. */
  vm.close = () => {
    $rootScope.$broadcast('refreshGroupsList')
    vm.toggle()
  }
}

export default {
  templateUrl: 'client/src/modules/admin/groups/components/update_left_panel/update_left_panel.html',
  controller: updateLeftPanel,
  controllerAs: 'vm',
  bindings: {
    collection: '=',
    loopKey: '@',
    titleKey: '@'
  }
}