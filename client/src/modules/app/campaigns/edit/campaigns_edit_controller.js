const campaignsEditController = function campaignsEditControllerFunction ($localStorage, $mdToast, $scope, $state, $timeout, CampaignsFactory, FormService) {
  'ngInject'

  const vm = this

  /** Method called when submitting the form to add a new player to the game. */
  vm.addPlayer = () => {
    FormService.reset(vm.invitationForm)
    CampaignsFactory.addPlayer($state.params.id, vm.invitationForm, vm.account, vm.updateInvitation)
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
      max_players: 5,
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
    /** Events linked to the modification of the list of events for this campaign. */
    _.each(['remove', 'creation', 'update'], (event) => {
      $scope.$on(`invitation.${event}`, vm.updateInvitationFromEvent)
    })
  }

  vm.pendings = () => _.filter(vm.invitations, {status: 'pending'});

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
    const parameters = _.pick(vm.campaign, ['title', 'description', 'tags', 'is_private', 'max_players'])
    CampaignsFactory.update($state.params.id, vm.campaignEditionForm, parameters, vm.success)
  }

  /**
   * Updates an invitation in the list, retrieving it by its ID.
   * @param {Object} invitation - the invitation to update in the list, replacing it with the new value.
   */
  vm.updateInvitation = (invitation) => {
    if (invitation.campaign.id === vm.campaign.id) {
      _.remove(vm.invitations, {id: invitation.id})
      vm.invitations.push(invitation)
    }
  }

  /**
   * Handler for the invitation list modification events.
   * @param {Object} event - the AngularJS event automatically added.
   * @param {Object} invitation - the invitation to modify in the list.
   */
  vm.updateInvitationFromEvent = (event, invitation) => vm.updateInvitation(invitation)

  vm.initialize()
}

export default campaignsEditController
