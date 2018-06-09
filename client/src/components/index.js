import confirmation from './confirmation_modal'
import countdown from './countdown'
import menus from './menus'

/** Add components here so they are added automatically to the module */
const componentsList = [confirmation, countdown, menus]

const components = angular.module('arkaan.frontend.components', componentsList).name

export default components
