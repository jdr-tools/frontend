export default function servicesListController (ServicesList) {
  'ngInject'

  const vm = this

  vm.servicesList = new ServicesList()

  $('[data-toggle="tooltip"]').tooltip({delay: 0})

  console.log(vm)
}