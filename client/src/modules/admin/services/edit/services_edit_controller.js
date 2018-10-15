export default function servicesEditController ($state, Service) {
  'ngInject'

  const vm = this

  vm.service = new Service($state.params.id)
}