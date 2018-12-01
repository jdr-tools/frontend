const filesController = function filesControllerFunction ($filter, $mdDialog, $rootScope, $scope, $state, $timeout, Api) {
  'ngInject'

  const vm = this

  vm.selectedFile = undefined

  /**
   * Selects the file in the list to display it in the interface.
   * @param {Object} file - the file to display in the interface.
   * @param {Boolean} forceReload - a boolean to force the eload even if it's the same file, TRUE to force reload, FALSE otherwise.
   */
  vm.selectFile = (file, forceReload = false) => {
    if (forceReload || file.name !== vm.selectedFile) {
      $rootScope.$broadcast('file.preview.loading')
      vm.selectedFile = file.name
      Api.get(`/campaigns/${vm.campaign.id}/files/${file.id}`, {}, {
        successCallback: (response) => $rootScope.$broadcast('file.preview.changed', file, response),
        errorCallback: () => $rootScope.$broadcast('file.preview.error', file)
      })
    }
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

  $scope.$on('file.preview.select', (event, file) => vm.selectFile(file, true))

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