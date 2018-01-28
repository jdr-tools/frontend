/**
 * Controller to display the list of rights.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const rightsListController = class RightsListController {
  constructor($state, Api) {
    'ngInject'
    this.rights = []
    this.state = $state
    this.api = Api
    const myself = this
    this.api.get('/rights', {}, {successCallback: (response) => { myself.rights = response.items }})
  }

  createRight () {
    this.state.go('createRight')
  }
}

export default rightsListController
