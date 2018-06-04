const campaignsComponent = function campaignsComponentFunction ($localStorage, $rootScope, Api, CampaignsFactory) {
  'ngInject'

  const vm = this

  vm.deleteCampaign = (campaign) => {
    CampaignsFactory.delete(campaign.id, () => _.remove(vm.items, campaign))
  }

  vm.isCreator = (campaign) => {
    console.log($localStorage.account.username)
    console.log(campaign.creator)
    return $localStorage.account && campaign.creator == $localStorage.account.username
  }

  vm.display = (campaign) => {
    return !campaign.invitation || _.includes(['refused', 'request', 'pending', 'left', 'expelled'], campaign.invitation.status)
  }

  vm.request = (campaign) => {
    CampaignsFactory.requestAccess(campaign, (response) => {
      campaign.invitation = Object.assign(response.item, {status: 'request'})
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