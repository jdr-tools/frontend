import groupsListController from './index/groups_list_controller'
import groupsRoute from './groups_route'
import updateLeftPanel from './components/update_left_panel/update_left_panel_component'

const groups = angular.module('arkaan.frontend.groups', [])
  .controller('groupsListController', groupsListController)
  .component('updateLeftPanel', updateLeftPanel)
  .config(groupsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('groups'))
  .name

export default groups
