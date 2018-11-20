import commands from './commands'
import panels from './panels'
import campaignsPlayController from './campaigns_play_controller'

export default angular.module('arkaan.frontend.campaigns.play', [commands, panels])
  .controller('campaignsPlayController', campaignsPlayController)
  .name