const campaignsListController = function campaignsListControllerFunction ($interval, $localStorage, $mdDialog, $rootScope, $scope, CampaignsFactory, Confirmation, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.getAllCampaigns = () => {
    vm.getOwnCampaigns()
    vm.getInvitations()
  }

  vm.initialize = () => {
    vm.creations = vm.emptyList()
    vm.invitations = []
    vm.getAllCampaigns()
  }

  vm.delete = (campaign) => Confirmation.trigger('campaign.delete', campaign)

  /** Gets the campaign you are the creator of. */
  vm.getOwnCampaigns = () => CampaignsFactory.own((campaigns) => { vm.creations = campaigns })

  /** Gets all invitations you're subject to (waiting requests, requests made to you, pending and accepted invitations). */
  vm.getInvitations = () => InvitationsFactory.own((invitations) => {
    vm.invitations = _.filter(invitations, (inv) => inv.status === 'accepted')
  })

  vm.leave = (invitation) => {
    InvitationsFactory.changeStatus(invitation, 'left', (invitation) => {
      _.remove(vm.invitations, {id: invitation.id})
    })
  }

  /**
   * Returns an empty campaigns list for the variables initializations.
   * @return {Object} an object filled with the 'count' and 'items' property, respectively an integer and an array of campaigns.
   */
  vm.emptyList = () => { return {count: 0, items: []} }

  vm.triggerCreationModal = (event) => {
    $rootScope.$broadcast('campaign.creation.trigger', event)
  }

  $scope.$on('campaign.created', vm.getOwnCampaigns)

  $scope.$on('campaign.delete', (e, campaign) => CampaignsFactory.delete(campaign.id, () => vm.getOwnCampaigns()))
  
  $scope.$on('invitation.update', (event, invitation) => {
    if (invitation.campaign.creator === $localStorage.account.username) {
      const creation = _.find(vm.creations.items, _.pick(invitation.campaign, 'id'))
      if (creation !== undefined) {
        switch (invitation.status) {
          case 'accepted':
            creation.current_players = creation.current_players + 1
            creation.waiting_players = creation.waiting_players - 1
            break
          case 'refused':
            creation.waiting_players = creation.waiting_players - 1
            break
        }
      }
    }
    else {
      switch (invitation.status) {
        case 'accepted':
          vm.invitations.push(invitation); break
        case 'refused':
          _.remove(vm.invitations, _.pick(invitation, 'id')); break
      }
    }
  })

  $scope.$on('invitation.creation', (event, invitation) => {
    if (invitation.campaign.creator === $localStorage.account.username) {
      const creation = _.find(vm.creations.items, _.pick(invitation.campaign, 'id'))
      if (creation !== undefined) {
        creation.waiting_players = creation.waiting_players + 1
      }
    }
    else {
      const updatedInvitation = _.find(vm.invitations, _.pick(invitation, 'id'))
      if (updatedInvitation !== undefined) {
        updatedInvitation.waiting_players = updatedInvitation.waiting_players + 1
      }
    }
  })

  vm.initialize()
}

export default campaignsListController
