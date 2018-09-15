/**
 * This component handles the top menu of the application and the related logic.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const appMenuController = function appMenuControllerFunction(Api, Authentication, $interval, $localStorage, $rootScope, InvitationsFactory) {
  'ngInject'

  const vm = this

  vm.authenticated = Authentication.checkSessionKeysPresence(false)
  vm.invitations = {
    pending: {count: 0, items: []},
    request: {count: 0, items: []}
  }
  vm.hasInvitations = false

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

  vm.addInvitation = (invitation) => {
    const key = invitation.campaign.creator == $localStorage.account.username ? 'request' : 'pending'
    vm.invitations[key].items.push(invitation)
    vm.invitations[key].count++
    vm.hasInvitations = true
    vm.requestsCount++
  }

  /** Logs the user out of the application and redirects him to the main page. */
  vm.logout = () => {
    vm.authenticated = false
    Authentication.destroyUserSession()
  }

  vm.refuse = (invitation_id) => {
    InvitationsFactory.changeStatus(invitation_id, 'refused', vm.getInvitations)
  }

  vm.setUsername = () => {
    if (vm.authenticated) {
      vm.username = $localStorage.account.username
    }
  }

  $rootScope.$on('disconnect', () => { vm.authenticated = false })

  $rootScope.$on('invitation.creation', (event, invitation) => vm.addInvitation(invitation))

  $rootScope.$on('loginSuccessful', () => {
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
