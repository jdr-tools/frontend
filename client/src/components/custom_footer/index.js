import customFooterComponent from './custom_footer_component'

const customFooter = angular.module('arkaan.frontend.components.custom_footer', [])
  .component('customFooter', customFooterComponent)
  .name

export default customFooter
