export default function serviceFactory (Api) {
  'ngInject'

  return class Service {
    constructor (id) {
      const vm = this
      Api.get(`/services/${id}`, {}, {successCallback: (response) => {
        Object.assign(vm, response)
      }})
    }

    toggleRouteFlag(route, flag) {
      const vm = this
      const url = `/services/${this.id}/routes/${route.id}`
      const params = {[flag]: !route[flag]}
      Api.put(url, params, {successCallback: (response) => {
        route[flag] = !route[flag]
      }})
    }

    toggleInstanceFlag(instance, flag) {
      const vm = this
      const url = `/services/${this.id}/instances/${instance.id}`
      const params = {[flag]: !instance[flag]}
      Api.put(url, params, {successCallback: (response) => {
        instance[flag] = !instance[flag]
      }})
    }
  }
}