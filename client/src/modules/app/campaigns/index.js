import campaignsListController from './index/campaigns_list_controller'
import campaignsEditController from './edit/campaigns_edit_controller'
import campaignsPlayController from './play/campaigns_play_controller'
import campaignsRoute from './campaigns_route'
import campaignsComponents from './components'

const campaigns = angular.module('arkaan.frontend.campaigns', [campaignsComponents])
  .controller('campaignsListController', campaignsListController)
  .controller('campaignsEditController', campaignsEditController)
  .controller('campaignsPlayController', campaignsPlayController)
  .config(campaignsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('campaigns'))
  .name

export default campaigns
