const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, Api) {
  'ngInject'

  const vm = this

  vm.accept = (invitation) => {
    Api.put(`/invitations/${invitation.id}`, {accepted: 'true'}, {
      successCallback: () => $rootScope.$broadcast('invitations.reset')
    })
  }

  vm.refuse = (invitation) => {
    Api.delete(`/invitations/${invitation.id}`, {
      successCallback: () => $rootScope.$broadcast('invitations.reset')
    })
  }

  vm.showAccept = (invitation) => {
    return $localStorage.account.username == invitation.username
  }
}

export default {
  controller: invitationsComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/invitations/invitations.html',
  bindings: {
    collection: '=',
    icons: '='
  }
}