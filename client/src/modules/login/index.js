import loginController from './login_controller'
import loginRoute from './login_route'

const login = angular.module('arkaan.frontend.login', [])
  .config(loginRoute)
  .controller('loginController', loginController)
  .name

export default login