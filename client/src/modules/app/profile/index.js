import profileController from './profile_controller'
import profileRoute from './profile_route'

const profile = angular.module('arkaan.frontend.app.profile', [])
  .config(profileRoute)
  .controller('profileController', profileController)
  .name

export default profile
