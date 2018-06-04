const campaignsPlayController = function campaignsPlayControllerFunction ($state) {
  'ngInject'

  const vm = this

  vm.campaign_id = $state.params.id
}

export default campaignsPlayController