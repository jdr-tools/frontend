const groupsFactory = function groupsFactoryFunction (Api) {
  'ngInject'
  
  const vm = this

  vm.create = (group, callback) => {
    Api.post('/groups', group, {successCallback: callback})
  }

  vm.get = (group_id, callback) => {
    Api.get(`/groups/${group_id}`, {}, {successCallback: callback})
  }

  vm.list = (callback) => {
    Api.get('/groups', {}, {successCallback: callback})
  }

  vm.updateRights = (group_id, rights, callback) => {
    Api.patch(`/groups/${group_id}/rights`, {rights: rights}, {successCallback: callback})
  }

  vm.updateRoutes = (group_id, routes, callback) => {
    Api.patch(`/groups/${group_id}/routes`, {routes: routes}, {successCallback: callback})
  }

  return vm
}

export default groupsFactory
