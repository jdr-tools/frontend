/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const appMenuController = function appMenuControllerFunction(Api, Authentication, $interval, $localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.auth = Authentication
  vm.authenticated = Authentication.checkSessionKeysPresence(false)
  vm.storage = $localStorage
  vm.invitations = []
  vm.hasInvitations = false

  $rootScope.$on('loginSuccessful', () => {
    vm.authenticated = true
    vm.setUsername()
  })

  vm.accept = (invitation_id) => {
    InvitationsFactory.changeStatus(invitation_id, 'accepted', () => {
      vm.getInvitations()
      $rootScope.$broadcast('invitation.accepted')
    })
  }

  vm.getInvitations = () => {
    if (vm.authenticated) {
      InvitationsFactory.own((response) => {
        vm.invitations = response
        vm.requestsCount = response.request.count + response.pending.count
        const requests = _.filter(response.request.items, (inv) => inv.username != $localStorage.account.username)
        vm.invitations.request = {count: requests.length, items: requests}
        vm.hasInvitations = vm.invitations.pending.count > 0 || vm.invitations.request.count > 0
      })
    }
  }

  /** Logs the user out of the application and redirects him to the main page. */
  vm.logout = () => {
    vm.authenticated = false
    vm.auth.destroyUserSession()
  }

  vm.refuse = (invitation_id) => {
    InvitationsFactory.changeStatus(invitation_id, 'refused', vm.getInvitations)
  }

  vm.setUsername = () => {
    if (vm.authenticated) {
      vm.username = vm.storage.account.username
    }
  }

  $rootScope.$on('disconnect', () => { vm.authenticated = false })

  vm.setUsername()

  $interval(vm.getInvitations, 2000)

  vm.getInvitations()
}

const appMenuComponent = {
  controller: appMenuController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/menus/app/app_menu.html'
}

export default appMenuComponent
