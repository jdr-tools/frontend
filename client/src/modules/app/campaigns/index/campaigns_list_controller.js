const campaignsListController = function campaignsListControllerFunction ($mdDialog, $rootScope, campaignsFactory) {
  'ngInject'

  const vm = this

  vm.getAllCampaigns = () => {
    campaignsFactory.list((campaigns) => { vm.campaigns = campaigns })
  }

  vm.deleteCampaign = (campaign_id) => {
    campaignsFactory.delete(campaign_id, vm.getAllCampaigns)
  }

  $rootScope.$on('campaign.created', vm.getAllCampaigns)
  
  vm.getAllCampaigns()
}

export default campaignsListController
