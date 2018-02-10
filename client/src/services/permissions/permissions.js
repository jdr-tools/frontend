/**
 * This service is designed to check permissions for a given user.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Permissions = class PermissionsClass {

  constructor($localStorage, $state) {
    this.account = $localStorage.account
    this.state = $state
  }

  /**
   * Checks if the currently logged in user has the given right, and if not redirects him to another page.
   * @param {String} right_name - the name of the right to search in the rights of the current user.
   * @param {redirect_state} - the state to redirect the user if he does not have the needed right.
   */
  checkAndRedirect (right_name, redirect_state) {
    if (!this.checkPresence(right_name)) this.state.go(redirect_state)
  }

  checkPresence (right_name) {
    let hasRight = false
    this.account.rights.forEach((right) => { if (right.slug == right_name) hasRight = true })
    return hasRight
  }
}

export default Permissions