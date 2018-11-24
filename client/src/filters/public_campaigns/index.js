import publicCampaigns from './public_campaigns'

export default angular.module('arkaan.frontend.filters.public_campaigns', [])
  .filter('publicCampaigns', publicCampaigns)
  .name