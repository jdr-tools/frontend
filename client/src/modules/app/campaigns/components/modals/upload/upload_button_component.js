const uploadButtonController = function uploadButtonControllerFunction ($localStorage, $mdDialog, $rootScope, Uploader, CampaignsFactory) {
  'ngInject'

  const vm = this

  /** Controller use dinside the template of the modal. */
  const dialogController = ($scope, $mdDialog, $state) => {

    $scope.state = 'started'

    $scope.initialize = () => {
      $scope.file = {filename: "", content: {}},
      $scope.mimeTypes = ['image/*', 'text/plain'].join(',')
    }

    $scope.validate = () => {
      $scope.state = 'uploading'
      vm.campaign.files.add($scope.file.content)
    }

    $scope.close = () => $mdDialog.cancel()

    $scope.initialize()

    $scope.$on('campaign.file.added', (event, file) => {
      if (file.campaign_id == vm.campaign.id) {
        $scope.state = 'uploaded'
      }
    })

    $scope.$on('campaign.upload.error', () => {
      $scope.state = 'error'
      $mdToast.show(
        $mdToast.simple()
          .textContent($filter('translate')('campaigns.play.errors.upload'))
          .position('bottom left')
          .hideDelay(2000))
    })
  }

  /**
   * Creates the modal display the form to create a new campaign.
   * @param {Object} event - just pass $event. It's the element in the DOM from which the modal will appear.
   */
  vm.openUploadModal = (event) => {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: 'client/src/modules/app/campaigns/components/modals/upload/upload_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: false
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