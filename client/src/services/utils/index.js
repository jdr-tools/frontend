import Confirmation from './confirmation'
import Uploader from './uploader'

const utils = angular.module('arkaan.frontend.services.utils', [])
  .service('Confirmation', Confirmation)
  .service('Uploader', Uploader)
  .name

export default utils