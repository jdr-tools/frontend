const campaignsSearchController = function campaignsSearchControllerFunction (CampaignsFactory, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.campaigns = {count: 0, items: []}

  vm.getCampaigns = () => CampaignsFactory.list((campaigns) => { vm.campaigns = campaigns })

  vm.request = (campaign) => CampaignsFactory.requestAccess(campaign, (result) => {
    campaign.invitation = Object.assign(result.item, {status: 'request'})
  })

  vm.deleteInvitation = (invitation) => {
    InvitationsFactory.delete(invitation.id, () => vm.getCampaigns())
  }

  vm.getCampaigns()
}

export default campaignsSearchController
