import commands from './commands'
import campaignsPlayController from './campaigns_play_controller'

export default angular.module('arkaan.frontend.campaigns.play', [commands])
  .controller('campaignsPlayController', campaignsPlayController)
  .name