const invitationsComponent = function invitationsComponentFunction ($localStorage, $rootScope, $scope, Confirmation, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.currentUsername = $localStorage.account.username

  vm.expel = expel;

  function expel (invitation) {
    return Confirmation.trigger('invitation.delete', invitation);
  }

  $scope.$on('invitation.delete', (e, invitation) => InvitationsFactory.expel(invitation));
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