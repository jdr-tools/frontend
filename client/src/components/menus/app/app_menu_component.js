/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const appMenuController = function appMenuControllerFunction(Authentication, $localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.auth = Authentication
  vm.authenticated = Authentication.checkSessionKeysPresence(false)
  vm.storage = $localStorage
  vm.invitations = []

  $rootScope.$on('loginSuccessful', () => {
    vm.authenticated = true
    vm.setUsername()
  })

  vm.accept = (invitation_id) => {
    InvitationsFactory.changeStatus(invitation_id, 'accepted', vm.getInvitations)
  }

  vm.getInvitations = () => {
    if (vm.authenticated) {
      InvitationsFactory.own((response) => {
        vm.invitations = response.pending.items
        console.log(response)
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

  vm.setUsername()

  vm.getInvitations()
}

const appMenuComponent = {
  controller: appMenuController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/menus/app/app_menu.html'
}

export default appMenuComponent
