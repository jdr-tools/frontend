export default function ServicesListFactory(Api) {
  'ngInject'

  const servicesList = function ServicesListFunction () {

    const vm = this

    vm.constructor = () => {
      Api.get('/services', {}, {successCallback: (response) => {
        vm.services = response.items
      }})
    }

    vm.toggleActiveState = (service) => {
      Api.put(`/services/${service.id}`, {active: !service.active}, {
        successCallback: () => {
          const item = _.find(vm.services, _.pick(service, 'id'))
          if (item !== undefined) item.active = !item.active
        }
      })
    }

    vm.constructor()
  }

  return (servicesList)
}