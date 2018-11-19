const filesController = function filesControllerFunction (Api, $rootScope, $scope, $state) {
  'ngInject'

  const vm = this

  /**
   * Selects the file in the list to display it in the interface.
   * @param {Object} file - the file to display in the interface.
   */
  vm.selectFile = (file) => {
    Api.get(`/campaigns/${vm.campaign.id}/files/${file.id}`, {}, {
      successCallback: (response) => {
        $rootScope.$broadcast('file.preview.changed', file, response)
      }
    })
  }

  /**
   * Deletes a file and removes it from the interface.
   * @param {Object} file - the file to remove.
   */
  vm.deleteFile = (file) => {
    vm.campaign.deleteFile(file)
  }

  $scope.$on('campaign.file.added', (event, file) => {
    if (file.campaign_id === $state.params.id) {
      vm.campaign.insertFile(file)
      $rootScope.$broadcast('file.upload.close')
    }
  })

  $scope.$on('campaign.file.deleted', (event, file) => {
    if (file.campaign_id === $state.params.id) {
      vm.campaign.removeFile(file)
    }
  })
}

export default {
  controller: filesController,
  controllerAs: 'vm',
  templateUrl: '/client/src/modules/app/campaigns/play/panels/files/files.html',
  bindings: {
    campaign: '='
  }
}