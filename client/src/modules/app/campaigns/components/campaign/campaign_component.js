const campaignComponent = function campaignComponentFunction ($localStorage, $rootScope, Api) {
  'ngInject'

  const vm = this

  vm.deleteCampaign = (campaign_id) => {
    CampaignsFactory.delete(campaign_id, vm.getAllCampaigns)
  }
}

export default {
  controller: campaignComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/campaign/campaign.html',
  bindings: {
    item: '='
  }
}