const invitationsFactory = function invitationsFactoryFunction (Api) {
  'ngInject'
  
  const vm = this

  vm.own = (callback) => {
    Api.get('/invitations/own', {}, {
      successCallback: callback
    })
  }

  return vm
}

export default invitationsFactory
