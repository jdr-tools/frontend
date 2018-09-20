const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.currentUsername = $localStorage.account.username

  vm.expel = (invitation) => {
    InvitationsFactory.changeStatus(invitation.id, 'expelled', (response) => {
      const returnedInvitation = Object.assign({}, invitation, {status: 'expelled'})
      $rootScope.$broadcast('invitations.remove', returnedInvitation)
    })
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