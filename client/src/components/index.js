import menus from './menus'
import customFooter from './custom_footer'

/** Add components here so they are added automatically to the module */
const componentsList = [menus, customFooter]

const components = angular.module('arkaan.frontend.components', componentsList).name

export default components
