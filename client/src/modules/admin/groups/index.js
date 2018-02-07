import groupsListController from './list/groups_list_controller'
import updateGroupController from './update/update_group_controller'
import groupsFactory from './factories/groups_factory.js'
import servicesFactory from './factories/services_factory.js'
import groupsRoute from './groups_route'

const groups = angular.module('arkaan.frontend.groups', [])
  .controller('groupsListController', groupsListController)
  .controller('updateGroupController', updateGroupController)
  .factory('GroupsFactory', groupsFactory)
  .factory('ServicesFactory', servicesFactory)
  .config(groupsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('groups'))
  .name

export default groups
