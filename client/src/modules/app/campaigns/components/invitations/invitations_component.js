const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.currentUsername = $localStorage.account.username

  vm.expel = (invitation) => {
    InvitationsFactory.changeStatus(invitation, 'expelled', (response) => {
      $rootScope.$broadcast('invitations.remove', response)
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