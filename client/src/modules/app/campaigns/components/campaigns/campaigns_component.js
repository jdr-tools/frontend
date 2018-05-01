const campaignsComponent = function campaignsComponentFunction ($localStorage, $rootScope, Api, CampaignsFactory) {
  'ngInject'

  const vm = this

  vm.deleteCampaign = (campaign) => {
    CampaignsFactory.delete(campaign.id, () => _.remove(vm.items, campaign))
  }

  vm.isCreator = (campaign) => {
    return campaign.creator.username == $localStorage.account.username
  }

  vm.request = (campaign) => {
    CampaignsFactory.requestAccess(campaign, (response) => {
      console.log(response)
    })
  }
}

export default {
  controller: campaignsComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/campaigns/campaigns.html',
  bindings: {
    items: '='
  }
}