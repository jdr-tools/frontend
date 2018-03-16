const campaignsFactory = function campaignsFactoryFunction (Api) {
  'ngInject'

  const service = this

  service.list = (callback) => {
    Api.get('/campaigns', {}, {successCallback: callback})
  }

  return service
}

export default campaignsFactory
