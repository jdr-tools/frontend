import servicesListController from './list/services_list_controller'
import servicesEditController from './edit/services_edit_controller'
import servicesRoute from './services_route'

export default angular.module('arkaan.frontend.administration.services', [])
  .controller('servicesListController', servicesListController)
  .controller('servicesEditController', servicesEditController)
  .config(servicesRoute)
  .run(($translatePartialLoader) => $translatePartialLoader.addPart('services'))
  .name