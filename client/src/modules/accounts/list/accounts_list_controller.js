/**
 * Controller to display the list of accounts. To display it, a user should have the correct right.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const accountsListController = class AccountsListController {
  constructor() {
    'ngInject'
    this.accounts = ['babausse', 'babaussine']
  }
}

export default accountsListController
