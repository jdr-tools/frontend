const campaignsListController = function campaignsListControllerFunction ($mdDialog, $rootScope, CampaignsFactory) {
  'ngInject'

  const vm = this

  vm.getAllCampaigns = () => {
    CampaignsFactory.list((campaigns) => { vm.campaigns = campaigns })
  }

  vm.deleteCampaign = (campaign_id) => {
    CampaignsFactory.delete(campaign_id, vm.getAllCampaigns)
  }

  $rootScope.$on('campaign.created', vm.getAllCampaigns)
  
  vm.getAllCampaigns()
}

export default campaignsListController
