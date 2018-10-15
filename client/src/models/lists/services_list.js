export default function ServicesListFactory(Api) {
  'ngInject'

  const servicesList = class ServicesListClass {
    constructor() {
      const vm = this
      Api.get('/services', {}, {successCallback: (response) => {
        vm.services = response.items
      }})
    }
  }

  return (servicesList)
}