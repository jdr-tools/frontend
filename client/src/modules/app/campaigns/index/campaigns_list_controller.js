const campaignsListController = function campaignsListControllerFunction ($interval, $mdDialog, $rootScope, CampaignsFactory, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.getAllCampaigns = () => {
    vm.getPublicCampaigns()
    vm.getOwnCampaigns()
    vm.getInvitations()
  }

  vm.initialize = () => {
    vm.publicCampaigns = vm.emptyList()
    vm.createdCampaigns = vm.emptyList()
    vm.invitations = {accepted: vm.emptyList(), pending: vm.emptyList(), request: vm.emptyList()}
    vm.initializeCountdown()
    vm.getAllCampaigns()
  }

  vm.delete = (campaign) => CampaignsFactory.delete(campaign.id, () => vm.getOwnCampaigns())

  /** Gets the public campaigns (whether you joined it or not). */
  vm.getPublicCampaigns = () => CampaignsFactory.list((campaigns) => { vm.publicCampaigns = campaigns })

  /** Gets the campaign you are the creator of. */
  vm.getOwnCampaigns = () => CampaignsFactory.own((campaigns) => { vm.createdCampaigns = campaigns })

  /** Gets all invitations you're subject to (waiting requests, requests made to you, pending and accepted invitations). */
  vm.getInvitations = () => InvitationsFactory.own((invitations) => { vm.invitations = invitations })

  vm.initializeCountdown = () => {
    vm.countdownDuration = 500
    $interval(vm.getAllCampaigns, vm.countdownDuration * 1000)
  }

  vm.leave = (invitation) => InvitationsFactory.changeStatus(invitation.id, 'left', vm.getAllCampaigns)

  vm.request = (campaign) => CampaignsFactory.requestAccess(campaign, (result) => {
    campaign.invitation = Object.assign(result.item, {status: 'request'})
  })

  vm.deleteInvitation = (invitation) => {
    InvitationsFactory.delete(invitation.id, () => vm.getPublicCampaigns())
  }

  /**
   * Returns an empty campaigns list for the variables initializations.
   * @return {Object} an object filled with the 'count' and 'items' property, respectively an integer and an array of campaigns.
   */
  vm.emptyList = () => { return {count: 0, items: []} }

  $rootScope.$on('campaign.created', vm.getOwnCampaigns)

  $rootScope.$on('invitation.accepted', vm.getInvitations)
  
  vm.initialize()
}

export default campaignsListController
