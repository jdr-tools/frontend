const campaignsListController = function campaignsListControllerFunction ($interval, $mdDialog, $rootScope, CampaignsFactory, Confirmation, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.getAllCampaigns = () => {
    vm.getOwnCampaigns()
    vm.getInvitations()
  }

  vm.initialize = () => {
    vm.creations = vm.emptyList()
    vm.invitations = []
    // vm.initializeCountdown()
    vm.getAllCampaigns()
  }

  vm.delete = (campaign) => Confirmation.trigger('campaign.delete', campaign)

  /** Gets the campaign you are the creator of. */
  vm.getOwnCampaigns = () => CampaignsFactory.own((campaigns) => { vm.creations = campaigns })

  /** Gets all invitations you're subject to (waiting requests, requests made to you, pending and accepted invitations). */
  vm.getInvitations = () => InvitationsFactory.own((invitations) => {
    vm.invitations = _.filter(invitations, (inv) => inv.status === 'accepted')
  })

  vm.initializeCountdown = () => {
    vm.countdownDuration = 5
    $interval(vm.getAllCampaigns, vm.countdownDuration * 1000)
  }

  vm.leave = (invitation) => InvitationsFactory.changeStatus(invitation.id, 'left', vm.getAllCampaigns)

  /**
   * Returns an empty campaigns list for the variables initializations.
   * @return {Object} an object filled with the 'count' and 'items' property, respectively an integer and an array of campaigns.
   */
  vm.emptyList = () => { return {count: 0, items: []} }

  $rootScope.$on('campaign.created', vm.getOwnCampaigns)

  $rootScope.$on('invitation.accepted', vm.getInvitations)

  $rootScope.$on('campaign.delete', (e, campaign) => CampaignsFactory.delete(campaign.id, () => vm.getOwnCampaigns()))
  
  vm.initialize()
}

export default campaignsListController
