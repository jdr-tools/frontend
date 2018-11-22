const filesController = function filesControllerFunction ($filter, $mdDialog, $rootScope, $scope, $state, Api) {
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
  vm.deleteFile = (file, $event) => {
    const t = $filter('translate')
    const confirmDialog = $mdDialog.confirm()
      .title(t('campaigns.play.dialogs.files.delete.title'))
      .textContent(t('campaigns.play.dialogs.files.delete.content'))
      .ariaLabel(t('campaigns.play.dialogs.files.delete.label'))
      .targetEvent($event)
      .ok(t('common.yes'))
      .cancel(t('common.no'))
    $mdDialog.show(confirmDialog).then(() => {
      vm.campaign.deleteFile(file)
    })
  }

  $scope.$on('campaign.file.added', (event, file) => {
    if (file.campaign_id === $state.params.id) {
      vm.campaign.insertFile(file)
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