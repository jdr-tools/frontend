export default function servicesListController ($mdToast, Api, ServicesList) {
  'ngInject'

  const vm = this

  vm.servicesList = new ServicesList()

  $('[data-toggle="tooltip"]').tooltip({delay: 0})

  vm.hasServiceSelected = () => {
    return _.some(vm.servicesList.services, {selected: true})
  }

  vm.resetServices = () => {
    _.each(vm.servicesList.services, service => {
      service.selected = false
    })
    const toast = $mdToast.simple()
      .position('bottom right')
      .textContent('Acction effectuée avec succès')
      .hideDelay(2000)
    $mdToast.show(toast)
  }

  vm.restartSelected = () => {
    const instances = {}
    _.each(vm.servicesList.services, service => {
      if (service.selected) {
        instances[service.id] = _.map(service.instances, 'id')
      }
    })
    const parameters = {action: 'restart', instances: instances}
    Api.post('/services/actions', parameters, {
      successCallback: vm.resetServices
    })
  }
}