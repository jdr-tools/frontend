const groupsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all groups-related states. */
  $stateProvider.state('groups', {
    parent: 'admin',
    resolve: {
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of groups. */
  $stateProvider.state('groups.index', {
    url: '/groups',
    templateUrl: 'src/modules/admin/groups/index/groups_list.html',
    controller: 'groupsListController as vm'
  })

  /** Concrete state for displaying the form to edit a group. */
  $stateProvider.state('groups.edit', {
    url: '/groups/{id}',
    templateUrl: 'src/modules/admin/groups/edit/update_group.html',
    controller: 'updateGroupController as vm'
  })
}

export default groupsRoute
