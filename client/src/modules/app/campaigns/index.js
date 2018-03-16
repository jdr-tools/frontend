import campaignsListController from './index/campaigns_list_controller'
import campaignsFactory from './factories/campaigns_factory.js'
import campaignsRoute from './campaigns_route'

const campaigns = angular.module('arkaan.frontend.campaigns', [])
  .controller('campaignsListController', campaignsListController)
  .factory('campaignsFactory', campaignsFactory)
  .config(campaignsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('campaigns'))
  .name

export default campaigns
