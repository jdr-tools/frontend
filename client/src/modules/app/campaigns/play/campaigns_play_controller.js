const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $scope, $state, $timeout, Api, Campaign, FormService, $rootScope) {
  'ngInject'

  const vm = this

  vm.campaign = new Campaign($state.params.id)

  vm.username = $localStorage.account.username

  vm.interfaceURL = '/client/src/modules/app/campaigns/play/panels/interface.html'

  vm.closePanel = () => {
    $mdSidenav('play-sidenav').close()
  }

  vm.openPanel = (panelType) => {
    vm.displayedPanel = panelType
    vm.panelURL = `/client/src/modules/app/campaigns/play/panels/${panelType}/include.html`
    $mdSidenav('play-sidenav')
      .open()
      .then(() => {
        if (panelType == 'chatroom') $rootScope.$broadcast('messages.scroll')
      })
  }

  vm.isCreator = () => {
    return _.get(vm, 'campaign.creator.username') == vm.username
  }

  vm.openUploadModal = () => {
    $rootScope.$broadcast('modals.upload.open')
  }

  vm.selectFile = (file) => {
    Api.get(`/campaigns/${vm.campaign.id}/files/${file.id}`, {}, {
      successCallback: (response) => {
        vm.imageRepresentation = response
        vm.displayFile = true
      }
    })
  }

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

  $scope.$on('command.failed', (event, error) => {
    FormService.reset(vm.sendMessageForm)
    vm.sendMessageForm.message.$setValidity(error.data.field, false)
  })
}

export default campaignsPlayController