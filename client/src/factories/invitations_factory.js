const invitationsFactory = function invitationsFactoryFunction (Api) {
  'ngInject'
  
  const vm = this

  vm.own = (callback) => {
    Api.get('/invitations/own', {}, {successCallback: callback})
  }

  vm.changeStatus = (invitation_id, status, callback) => {
    Api.put(`/invitations/${invitation_id}`, {status: status}, {successCallback: callback})
  }

  return vm
}

export default invitationsFactory
