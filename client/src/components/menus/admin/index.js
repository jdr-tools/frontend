import adminMenuComponent from './admin_menu_component'

const adminMenu = angular.module('arkaan.frontend.components.menus.admin', [])
  .component('adminMenu', adminMenuComponent)
  .name

export default adminMenu
