const campaignsEditComponent = function ($localStorage, $mdDialog, $rootScope, campaignsFactory) {
  'ngInject'

  const vm = this

  const dialogController = ($scope, $mdDialog) => {
    /** The structure for the campaign to create. */
    $scope.campaign = {
      title: '',
      isPrivate: true,
      description: '',
      tags: [],
      creator_id: $localStorage.account.id
    }
    /** Closes the modal without calling the function to create a campaign. */
    $scope.close = () => $mdDialog.cancel()
    /** Closes the modal and broadcasts the campaign.created event to refresh the campaigns list. */
    $scope.closeAndRefresh = () => $mdDialog.hide()
    /** Closes the modal and creates the campaign. */
    $scope.validate = () => campaignsFactory.create($scope.campaign, $scope.closeAndRefresh)
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
      templateUrl: '/src/modules/app/campaigns/components/modals/edit/campaigns_edit_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true
    })
    .then(vm.onCreation)
  }
}

export default {
  controller: campaignsEditComponent,
  controllerAs: 'vm',
  templateUrl: '/src/modules/app/campaigns/components/modals/edit/campaigns_edit.html'
}