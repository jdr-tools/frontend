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
    templateUrl: 'client/src/modules/admin/groups/index/groups_list.html',
    controller: 'groupsListController as vm'
  })
}

export default groupsRoute
