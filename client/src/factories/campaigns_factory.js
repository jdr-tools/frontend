const CampaignsFactory = function CampaignsFactoryFunction (Api, $localStorage, $rootScope, WebsocketNotifier) {
  'ngInject'

  const service = this

  service.addPlayer = (campaign_id, form, username, success, failure) => {
    Api.post('/invitations', {username: username, campaign_id: campaign_id}, {
      successCallback: (response) => {
        success(response.item)
        WebsocketNotifier.sendToUsername(username, 'invitation.creation', response.item)
      },
      errorsForm: form
    })
  }

  service.requestAccess = (campaign, callback) => {
    Api.post('/invitations', {username: $localStorage.account.username, campaign_id: campaign.id}, {
      successCallback: callback
    })
  }

  service.create = (form, campaign, success) => {
    Api.post('/campaigns', campaign, {
      successCallback: success,
      errorsForm: form
    })
  }

  service.delete = (campaign_id, callback) => {
    Api.delete(`/campaigns/${campaign_id}`, {successCallback: callback})
  }

  service.get = (campaign_id, callback) => {
    Api.get(`/campaigns/${campaign_id}`, {}, {successCallback: callback})
  }

  service.invitations = (campaign_id, callback) => {
    Api.get(`/campaigns/${campaign_id}/invitations`, {}, {successCallback: callback})
  }

  service.list = (callback) => {
    Api.get('/campaigns', {}, {successCallback: callback})
  }

  service.own = (callback) => {
    Api.get('/campaigns/creations', {}, {successCallback: callback})
  }

  service.update = (campaign_id, form, parameters, success) => {
    Api.put(`/campaigns/${campaign_id}`, parameters, {
      successCallback: success,
      errorsForm: form
    })
  }

  return service
}

export default CampaignsFactory
