const campaignsCreateComponent = function campaignsCreateComponentFunction ($localStorage, $mdDialog, $rootScope, CampaignsFactory) {
  'ngInject'

  const vm = this

  const dialogController = ($scope, $mdDialog) => {
    /** The structure for the campaign to create. */
    $scope.campaign = {
      title: '',
      is_private: true,
      description: '',
      tags: [],
      creator_id: $localStorage.account.id
    }
    /** Closes the modal without calling the function to create a campaign. */
    $scope.close = () => $mdDialog.cancel()
    /** Closes the modal and broadcasts the campaign.created event to refresh the campaigns list. */
    $scope.closeAndRefresh = () => $mdDialog.hide()
    /** Closes the modal and creates the campaign. */
    $scope.validate = () => CampaignsFactory.create($scope.campaignCreationForm, $scope.campaign, $scope.closeAndRefresh)
  }

  /**
   * Method called when the user validates the creation of the campaign and it's valid.
   * @param {Object} campaign - the parameters of the campaign to create.
   */
  vm.onCreation = () => {
    $rootScope.$broadcast('campaign.created')
  }

  /**
   * Creates the modal display the form to create a new campaign.
   * @param {Object} event - just pass $event.
   */
  vm.createCampaign = (event) => {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'client/src/modules/app/campaigns/components/modals/create/campaigns_create_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true
    })
    .then(vm.onCreation)
  }
}

export default {
  controller: campaignsCreateComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/modals/create/campaigns_create.html'
}