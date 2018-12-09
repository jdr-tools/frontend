/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const appMenuController = function appMenuControllerFunction(Api, Authentication, $interval, $localStorage, $rootScope, $scope, $translate, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.authenticated = Authentication.checkSessionKeysPresence(false)
  vm.invitations = []
  vm.hasInvitations = false

  vm.accept = (invitation) => {
    InvitationsFactory.changeStatus(invitation, 'accepted', vm.remove)
  }

  vm.getInvitations = () => {
    if (vm.authenticated) {
      InvitationsFactory.own((response) => {
        vm.invitations = _.filter(response, (inv) => {
          const isCampaignCreator = inv.username === $localStorage.account.username
          return inv.status === 'pending' || (inv.status === 'request' && !isCampaignCreator)
        })
        vm.sortInvitations()
      })
    }
  }

  vm.addInvitation = (invitation) => {
    vm.invitations.push(invitation)
    vm.sortInvitations()
  }

  vm.sortInvitations = () => {
    vm.invitations = _.sortBy(vm.invitations, ['status', 'created_at'])
  }

  /** Logs the user out of the application and redirects him to the main page. */
  vm.logout = () => {
    vm.authenticated = false
    Authentication.destroyUserSession()
    $translate.use('fr_FR')
  }

  vm.refuse = (invitation) => {
    InvitationsFactory.changeStatus(invitation, 'refused', vm.remove)
  }

  vm.remove = (invitation) => {
    _.remove(vm.invitations, _.pick(invitation, 'id'))
  }

  vm.setUsername = () => {
    if (vm.authenticated) {
      vm.username = $localStorage.account.username
    }
  }

  $scope.$on('disconnect', () => { vm.authenticated = false })

  $scope.$on('invitation.creation', (event, invitation) => vm.addInvitation(invitation))

  $scope.$on('loginSuccessful', () => {
    vm.authenticated = true
    vm.setUsername()
  })

  vm.setUsername()

  vm.getInvitations()
}

const appMenuComponent = {
  controller: appMenuController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/menus/app/app_menu.html'
}

export default appMenuComponent
