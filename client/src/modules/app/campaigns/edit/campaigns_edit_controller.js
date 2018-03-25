const campaignsEditController = function campaignsEditControllerFunction ($mdToast, $state, campaignsFactory) {
  'ngInject'

  const vm = this

  vm.initialize = () => {
    campaignsFactory.get($state.params.id, (campaign) => {
      vm.campaign = campaign
    })
  }

  vm.update = () => {
    const parameters = _.pick(vm.campaign, ['title', 'description', 'tags', 'is_private'])
    campaignsFactory.update($state.params.id, parameters, () => {
      const toast = $mdToast.simple()
        .position('bottom right')
        .textContent('Campagne mise à jour avec succès')
        .hideDelay(2000)
      console.log(toast)
      $mdToast.show(toast)
      vm.initialize()
    })
  }

  vm.initialize()
}

export default campaignsEditController
