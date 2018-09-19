const campaignsSearchController = function campaignsSearchControllerFunction ($rootScope, CampaignsFactory, InvitationsFactory) {
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

  /**
   * An invitation update is an update message sent by the websockets service to the user
   * to warn him that one of its invitation has been modified (mainly accepted)
   */
  $rootScope.$on('invitation.update', (event, invitation) => {
    ionst index = _.findIndex(vm.campaigns.items, {id: invitation.campaign.id})
    if (index > -1 ) {
      vm.campaigns.items[index].invitation = invitation
    }
  })

  vm.getCampaigns()
}

export default campaignsSearchController
