const campaignsListController = function campaignsListControllerFunction ($mdDialog, $rootScope, CampaignsFactory, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.campaigns = {
    public: [],
    own: []
  }

  vm.invitations = {
    pending: [],
    accepted: []
  }

  vm.getAllCampaigns = () => {
    CampaignsFactory.list((campaigns) => { vm.campaigns.public = campaigns.items })
    CampaignsFactory.own((campaigns) => { vm.campaigns.own = campaigns.items })
    InvitationsFactory.own((invitations) => { vm.invitations = invitations; console.log(invitations) })
  }

  $rootScope.$on('campaign.created', vm.getAllCampaigns)
  
  vm.getAllCampaigns()
}

export default campaignsListController
