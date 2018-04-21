const campaignsListController = function campaignsListControllerFunction ($mdDialog, $rootScope, CampaignsFactory, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.campaigns = {
    public: [],
    own: []
  }

  vm.getAllCampaigns = () => {
    CampaignsFactory.list((campaigns) => { vm.campaigns.public = campaigns.items })
    CampaignsFactory.own((campaigns) => { vm.campaigns.own = campaigns.items })
  }

  $rootScope.$on('campaign.created', vm.getAllCampaigns)
  
  vm.getAllCampaigns()
}

export default campaignsListController
