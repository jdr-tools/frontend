const rightsRoute = function ($stateProvider) {
  'ngInject'

  /** Virtual state for all services-related states. */
  $stateProvider.state('services', {
    parent: 'admin',
    resolve: {
      authentication: (Authentication) => {
        'ngInject'
        Authentication.checkAndRedirect()
      }
    }
  })

  /** Concrete state for displaying a list of services. */
  $stateProvider.state('services.index', {
    url: '/services',
    templateUrl: 'client/src/modules/admin/services/list/services_list.html',
    controller: 'servicesListController as vm'
  })

  /** Concrete state for editing a service. */
  $stateProvider.state('services.edit', {
    url: '/services/:id',
    templateUrl: 'client/src/modules/admin/services/edit/services_edit.html',
    controller: 'servicesEditController as vm'
  })
}

export default rightsRoute
