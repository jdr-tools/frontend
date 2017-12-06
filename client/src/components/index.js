import mainMenu from './main_menu'

/** Add components here so they are added automatically to the module */
const componentsList = [mainMenu]

const components = angular.module('arkaan.frontend.components', componentsList).name

export default components
