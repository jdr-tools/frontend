const campaignCardController = function campaignCardControllerFunction () {
  'ngInject'

  const vm = this

  vm.playersParameters = () => {
    return {
      current: vm.campaign.current_players,
      max: vm.campaign.max_players
    }
  }

  vm.waitingParameters = () => {
    return {count: vm.campaign.waiting_players}
  }
}

export default {
  controller: campaignCardController,
  controllerAs: 'vm',
  templateUrl: "/client/src/modules/app/campaigns/components/campaign_card/campaign_card.html",
  transclude: true,
  bindings: {
    campaign: '='
  }
}