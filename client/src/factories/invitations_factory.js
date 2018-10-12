const invitationsFactory = function invitationsFactoryFunction (Api, WebsocketNotifier) {
  'ngInject'
  
  const vm = this

  vm.own = (callback) => {
    Api.get('/invitations', {}, {successCallback: callback})
  }

  vm.changeStatus = (invitation_id, status, callback) => {
    Api.put(`/invitations/${invitation_id}`, {status: status}, {successCallback: (response) => {
      WebsocketNotifier.sendToCampaign(invitation.campaign.id, 'invitation.update', response.item)
      callback()
    }})
  }

  vm.delete = (invitation_id, callback) => {
    Api.delete(`/invitations/${invitation_id}`, {successCallback: callback})
  }

  return vm
}

export default invitationsFactory
