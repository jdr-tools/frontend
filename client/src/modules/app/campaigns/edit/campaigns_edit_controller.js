const campaignsEditController = function campaignsEditControllerFunction ($mdToast, $state, campaignsFactory) {
  'ngInject'

  const vm = this

  vm.failure = (response) => ErrorsService.append(vm.campaignEditionForm, response)

  vm.initialize = () => {
    campaignsFactory.get($state.params.id, (campaign) => {
      vm.campaign = campaign
    })
  }

  vm.success = () => {
    const toast = $mdToast.simple()
      .position('bottom right')
      .textContent('Campagne mise à jour avec succès')
      .hideDelay(2000)
    $mdToast.show(toast)
    vm.initialize()
  }

  vm.update = () => {
    const parameters = _.pick(vm.campaign, ['title', 'description', 'tags', 'is_private'])
    campaignsFactory.update($state.params.id, parameters, vm.success, vm.failure)
  }

  vm.initialize()
}

export default campaignsEditController
