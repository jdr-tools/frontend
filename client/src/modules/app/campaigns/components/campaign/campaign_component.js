const campaignComponent = function campaignComponentFunction ($localStorage, $rootScope, Api, CampaignsFactory) {
  'ngInject'

  const vm = this
}

export default {
  controller: campaignComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/campaign/campaign.html',
  transclude: true,
  bindings: {
    item: '=',
    state: '='
  }
}