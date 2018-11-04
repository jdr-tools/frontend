import menus from './menus'
import uploader from './uploader'

/** Add components here so they are added automatically to the module */
const componentsList = [menus, uploader]

export default angular.module('arkaan.frontend.components', componentsList).name