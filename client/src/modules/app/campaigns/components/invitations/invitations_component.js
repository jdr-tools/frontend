const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.accept = (invitation) => {
    InvitationsFactory.changeStatus(invitation.id, 'accepted', () => $rootScope.$broadcast('invitations.reset'))
  }

  vm.delete = (invitation) => {
    InvitationsFactory.delete(invitation.id, () => $rootScope.$broadcast('invitations.reset'))
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