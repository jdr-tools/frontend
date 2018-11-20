import campaignsListController from './index/campaigns_list_controller'
import campaignsEditController from './edit/campaigns_edit_controller'
import campaignsSearchController from './search/campaigns_search_controller'
import campaignsRoute from './campaigns_route'
import campaignsComponents from './components'
import campaignsPlay from './play'

const campaigns = angular.module('arkaan.frontend.campaigns', [campaignsComponents, campaignsPlay])
  .controller('campaignsListController', campaignsListController)
  .controller('campaignsEditController', campaignsEditController)
  .controller('campaignsSearchController', campaignsSearchController)
  .config(campaignsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('campaigns'))
  .name

export default campaigns
