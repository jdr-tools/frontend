import sessionsCreateController from './create/sessions_create_controller'
import sessionsRoute from '././sessions_route'

const login = angular.module('arkaan.frontend.sessions', [])
  .controller('sessionsCreateController', sessionsCreateController)
  .config(sessionsRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('sessions'))
  .name

export default login