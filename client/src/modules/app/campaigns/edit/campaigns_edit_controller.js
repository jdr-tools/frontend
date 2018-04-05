const campaignsEditController = function campaignsEditControllerFunction ($localStorage, $mdToast, $state, CampaignsFactory, ErrorsService) {
  'ngInject'

  const vm = this
  
    console.log(vm.invitationForm)

  /** Method called when submitting the form to add a new player to the game. */
  vm.addPlayer = () => {
    ErrorsService.resetErrors(vm.invitationForm)
    CampaignsFactory.addPlayer($state.params.id, vm.account, vm.refreshInvitations, vm.invitationErrors)
  }

  /**
   * Method called when the campaign is tnot correctly updated, appending the errors to the form.
   * @param {Object} response - the response of the API, containing the errors.
   */
  vm.failure = (response) => ErrorsService.append(vm.campaignEditionForm, response)

  vm.get = (campaign_id) => {
    CampaignsFactory.get(campaign_id, (campaign) => {
      vm.campaign = campaign
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
    vm.invitations = {
      accepted: {count: 0, items: []},
      pending: {count: 0, items: []}
    }
    /** The name of the player you want to invite in the dedicated field. */
    vm.playername = ''
    /** Current username of the connected account. */
    vm.currentUsername = $localStorage.account.username
    /** Fill the informations for the campaign. */
    vm.get($state.params.id)
    /** Gets the invitations (accepted or not) for this campaign. */
    vm.refreshInvitations()
  }

  /**
   * This method handles and appends errors for the invitation of a player (usually the player does not exist).
   * @param {Object} response - the body of the response returned by the API.
   */
  vm.invitationErrors = (response) => {
    ErrorsService.append(vm.invitationForm, response)
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
    CampaignsFactory.update($state.params.id, parameters, vm.success, vm.failure)
  }

  vm.initialize()
}

export default campaignsEditController
