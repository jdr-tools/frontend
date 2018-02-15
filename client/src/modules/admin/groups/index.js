import groupsListController from './index/groups_list_controller'
import groupsFactory from './factories/groups_factory.js'
import servicesFactory from './factories/services_factory.js'
import groupsRoute from './groups_route'
import updateLeftPanel from './components/update_left_panel/update_left_panel_component'

const groups = angular.module('arkaan.frontend.groups', [])
  .controller('groupsListController', groupsListController)
  .component('updateLeftPanel', updateLeftPanel)
  .factory('GroupsFactory', groupsFactory)
  .factory('ServicesFactory', servicesFactory)
  .config(groupsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('groups'))
  .name

export default groups
