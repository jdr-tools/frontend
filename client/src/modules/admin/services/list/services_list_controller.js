export default function servicesListController (ServicesList) {
  'ngInject'

  const vm = this

  vm.servicesList = new ServicesList()
}