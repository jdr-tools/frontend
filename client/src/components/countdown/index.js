import countdownComponent from './countdown_component'

const countdown = angular.module('arkaan.frontend.components.countdown', [])
  .component('countdown', countdownComponent)
  .name

export default countdown
