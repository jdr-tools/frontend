import appMenu from './app'
import adminMenu from './admin'

const menus = angular.module('arkaan.frontend.components.menus', [appMenu, adminMenu]).name

export default menus
