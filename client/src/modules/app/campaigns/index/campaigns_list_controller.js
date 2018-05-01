const campaignsListController = function campaignsListControllerFunction ($mdDialog, $rootScope, CampaignsFactory, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.campaigns = {
    public: [],
    own: []
  }

  vm.acceptedInvitations = false

  vm.getAllCampaigns = () => {
    CampaignsFactory.list((campaigns) => { vm.campaigns.public = campaigns.items })
    CampaignsFactory.own((campaigns) => { vm.campaigns.own = campaigns.items })
    InvitationsFactory.own((invitations) => { vm.acceptedInvitations = _.map(invitations.accepted.items, 'campaign') })
  }

  $rootScope.$on('campaign.created', vm.getAllCampaigns)
  
  vm.getAllCampaigns()
}

export default campaignsListController
