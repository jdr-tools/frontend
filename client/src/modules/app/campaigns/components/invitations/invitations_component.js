const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.currentUsername = $localStorage.account.username

  vm.accept = (invitation) => {
    InvitationsFactory.changeStatus(invitation.id, 'accepted', () => $rootScope.$broadcast('invitations.reset'))
  }

  vm.expel = (invitation) => {
    InvitationsFactory.changeStatus(invitation.id, 'expelled', () => $rootScope.$broadcast('invitations.reset'))
  }
}

export default {
  controller: invitationsComponent,
  controllerAs: 'vm',
  templateUrl: 'client/src/modules/app/campaigns/components/invitations/invitations.html',
  bindings: {
    collection: '=',
    status: '@'
  }
}