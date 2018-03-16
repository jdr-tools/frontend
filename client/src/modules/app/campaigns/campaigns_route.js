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
    templateUrl: 'src/modules/app/campaigns/index/campaigns_list.html',
    controller: 'campaignsListController as vm'
  })
}

export default campaignsRoute
