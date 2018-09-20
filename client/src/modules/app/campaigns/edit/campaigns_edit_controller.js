const campaignsEditController = function campaignsEditControllerFunction ($localStorage, $mdToast, $rootScope, $scope, $state, $timeout, CampaignsFactory, ErrorsService) {
  'ngInject'

  const vm = this

  vm.addInvitation = (invitation) => {
    _.remove(vm.invitations, {id: invitation.id})
    vm.invitations.push(invitation)
  }

  /** Method called when submitting the form to add a new player to the game. */
  vm.addPlayer = () => {
    ErrorsService.resetErrors(vm.invitationForm)
    CampaignsFactory.addPlayer($state.params.id, vm.invitationForm, vm.account, vm.addInvitation)
  }

  /**
   * Gets the informations about a campaign.
   * @param {String} campaign_id - the unique identifier of the campaign.
   */
  vm.get = (campaign_id) => {
    CampaignsFactory.get(campaign_id, (campaign) => {
     if (campaign.creator.username == $localStorage.account.username) {
        vm.initialized = true
        vm.campaign = campaign
      }
      else {
        vm.unauthorized = true
      }
    })
  }

  /** Constructor of the controller, call it to reset it entirely. */
  vm.initialize = () => {
    /** The structure holding the currently edited campaign. */
    vm.campaign = {
      title: '',
      description: '',
      is_private: true,
      tags: []
    }
    /** The structure holding the list of invitations. */
    vm.invitations = []
    /** The name of the player you want to invite in the dedicated field. */
    vm.playername = ''
    /** Current username of the connected account. */
    vm.currentUsername = $localStorage.account.username
    /** Fill the informations for the campaign. */
    vm.get($state.params.id)
    /** Gets the invitations (accepted or not) for this campaign. */
    vm.refreshInvitations()
    /** Flag indicating that the user has not the right to edit this campaign. */
    vm.unauthorized = false
    /** This flag is used when the request is successfully done, and stops the spinner. */
    vm.initialized = false
  }

  /**
   * Gets the invitations linked to this campaign. An invitation can be :
   * - pending (the player is not yet participating to the campaign)
   * - accepted (the player can access the campaign and play in it)
   */
  vm.refreshInvitations = () => {
    CampaignsFactory.invitations($state.params.id, (response) => {
      vm.invitations = response
    })
  }

  /** The success method called when you successfully edit the campaign. */
  vm.success = () => {
    const toast = $mdToast.simple()
      .position('bottom right')
      .textContent('Campagne mise à jour avec succès')
      .hideDelay(2000)
    $mdToast.show(toast)
    vm.initialize()
  }

  /** The submit of the update form. */
  vm.update = () => {
    const parameters = _.pick(vm.campaign, ['title', 'description', 'tags', 'is_private'])
    CampaignsFactory.update($state.params.id, vm.campaignEditionForm, parameters, vm.success)
  }

  vm.initialize()

  $rootScope.$on('invitations.remove', (event, invitation) => vm.addInvitation(invitation))

  $rootScope.$on('invitation.creation', (event, invitation) => vm.addInvitation(invitation))

  $rootScope.$on('invitation.update', (event, invitation) => {
    if (invitation.campaign.id === vm.campaign.id) {
      vm.addInvitation(invitation)
    }
  })
}

export default campaignsEditController
