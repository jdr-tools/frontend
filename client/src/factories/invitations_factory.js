const invitationsFactory = function invitationsFactoryFunction (Api, WebsocketNotifier) {
  'ngInject'
  
  const vm = this

  vm.own = (callback) => {
    Api.get('/invitations', {}, {successCallback: callback})
  }

  vm.changeStatus = (invitation, status, callback) => {
    Api.put(`/invitations/${invitation.id}`, {status: status}, {successCallback: response => {
      const invit = response.item
      WebsocketNotifier.sendToCampaign(invit.campaign.id, 'invitation.update', invit)
      callback(invit)
    }})
  }

  vm.delete = (invitation, callback) => {
    Api.delete(`/invitations/${invitation.id}`, {successCallback: callback})
  }

  return vm
}

export default invitationsFactory
