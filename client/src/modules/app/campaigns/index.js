import campaignsListController from './index/campaigns_list_controller'
import campaignsEditController from './edit/campaigns_edit_controller'
import campaignsFactory from './factories/campaigns_factory.js'
import campaignsRoute from './campaigns_route'
import campaignsComponents from './components'

const campaigns = angular.module('arkaan.frontend.campaigns', [campaignsComponents])
  .controller('campaignsListController', campaignsListController)
  .controller('campaignsEditController', campaignsEditController)
  .factory('campaignsFactory', campaignsFactory)
  .config(campaignsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('campaigns'))
  .name

export default campaigns
