const campaignsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all groups-related states. */
  $stateProvider.state('campaigns', {
    parent: 'app',
    resolve: {
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of groups. */
  $stateProvider.state('campaigns.index', {
    url: '/campaigns',
    templateUrl: 'client/src/modules/app/campaigns/index/campaigns_list.html',
    controller: 'campaignsListController as vm'
  })

  $stateProvider.state('campaigns.edit', {
    url: '/campaigns/{id}',
    templateUrl: 'client/src/modules/app/campaigns/edit/campaigns_edit.html',
    controller: 'campaignsEditController as vm'
  })
}

export default campaignsRoute
