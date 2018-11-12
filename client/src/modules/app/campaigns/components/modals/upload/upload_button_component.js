const uploadButtonController = function uploadButtonControllerFunction ($localStorage, $mdDialog, $rootScope, Uploader, CampaignsFactory) {
  'ngInject'

  const vm = this

  const dialogController = ($scope, $mdDialog) => {
    $scope.initialize = () => {
      $scope.file = {filename: "", content: {}},
      $scope.mimeTypes = ['image/*', 'text/plain'].join(',')
    }
    $scope.validate = () => {
      Uploader.uploadFileObject(`/campaigns/${vm.campaign.id}/files`, $scope.file.content)
    }
    $scope.initialize()
  }

  /**
   * Creates the modal display the form to create a new campaign.
   * @param {Object} event - just pass $event.
   */
  vm.openUploadModal = (event) => {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'client/src/modules/app/campaigns/components/modals/upload/upload_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true
    })
  }
}

export default {
  controller: uploadButtonController,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/modals/upload/upload_button.html',
  bindings: {
    campaign: '='
  }
}