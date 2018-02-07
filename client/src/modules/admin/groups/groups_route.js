const groupsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all accounts-related states. */
  $stateProvider.state('groups', {
    parent: 'admin',
    resolve: {
      /** Redirects the user to the login page if he's not yet connected. */
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state('groupsList', {
    url: '/groups',
    parent: 'groups',
    templateUrl: 'src/modules/admin/groups/list/groups_list.html',
    controller: 'groupsListController as vm'
  })

  /** Concrete state for displaying a list of accounts. */
  $stateProvider.state('updateGroup', {
    url: '/groups/{group_id}',
    parent: 'groups',
    templateUrl: 'src/modules/admin/groups/update/update_group.html',
    controller: 'updateGroupController as vm'
  })
}

export default groupsRoute
