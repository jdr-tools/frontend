export default function serviceFactory (Api) {
  'ngInject'

  return class Service {
    constructor (id) {
      const vm = this
      Api.get(`/services/${id}`, {}, {successCallback: (response) => {
        Object.assign(vm, response)
      }})
    }

    reboot (instance) {
      Api.post(`/services/${this.id}/instances/${instance.id}/actions`, {type: 'restart'}, {successCallback: (response) => {
        console.log(response)
      }})
    }
  }
}