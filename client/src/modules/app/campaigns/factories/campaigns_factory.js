const campaignsFactory = function campaignsFactoryFunction (Api) {
  'ngInject'

  const service = this

  service.create = (campaign, callback) => {
    Api.post('/campaigns', campaign, {successCallback: callback})
  }

  service.delete = (campaign_id, callback) => {
    Api.delete(`/campaigns/${campaign_id}`, {successCallback: callback})
  }

  service.get = (campaign_id, callback) => {
    Api.get(`/campaigns/${campaign_id}`, {}, {successCallback: callback})
  }

  service.list = (callback) => {
    Api.get('/campaigns', {}, {successCallback: callback})
  }

  service.update = (campaign_id, parameters, callback) => {
    Api.put(`/campaigns/${campaign_id}`, parameters, {successCallback: callback})
  }

  return service
}

export default campaignsFactory
