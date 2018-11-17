const campaignsPlayController = function campaignsPlayControllerFunction ($localStorage, $mdSidenav, $scope, $state, $timeout, Api, Campaign, FormService, $rootScope) {
  'ngInject'

  const vm = this

  vm.campaign = new Campaign($state.params.id)

  vm.username = $localStorage.account.username

  vm.closePanel = () => {
    $mdSidenav('play-sidenav').close()
  }

  vm.openPanel = (panelType) => {
    vm.displayedPanel = panelType
    vm.panelURL = `/client/src/modules/app/campaigns/play/panels/${panelType}.html`
    $mdSidenav('play-sidenav')
      .open()
      .then(() => {
        if (panelType == 'chatroom') vm.scrollMessages()
      })
  }

  vm.sendMessage = () => vm.campaign.addMessage(vm.message)

  vm.scrollMessages = () => {
    const elements = $('#chatroom-scroller')
    if (elements.length > 0) {
      elements[0].scrollTop = elements[0].scrollHeight
    }
    
  }

  vm.getRollTotal = (roll) => {
    return _.sum(roll.results)
  }

  vm.getTotal = (message) => {
    return _.sum(_.map(message.data.rolls, vm.getRollTotal)) + message.data.modifier
  }

  vm.isCreator = () => {
    return _.get(vm, 'campaign.creator.username') == vm.username
  }

  vm.openUploadModal = () => {
    $rootScope.$broadcast('modals.upload.open')
  }

  vm.getCommandTemplate = (command) => {
    return `/client/src/modules/app/campaigns/play/commands/${command.data.command}.html`
  }

  $scope.$on('message.created', (event, message) => {
    if (message.campaign_id === $state.params.id) {
      FormService.reset(vm.sendMessageForm)
      vm.campaign.insertMessage(message)
      vm.message = ''
      vm.scrollMessages()
    }
  })

  $scope.$on('campaign.file.added', (event, file) => {
    if (file.campaign_id === $state.params.id) {
      vm.campaign.insertFile(file)
      $rootScope.$broadcast('file.upload.close')
    }
  })

  $scope.$on('command.failed', (event, error) => {
    FormService.reset(vm.sendMessageForm)
    vm.sendMessageForm.message.$setValidity(error.data.field, false)
  })
}

export default campaignsPlayController