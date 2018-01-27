/**
 * Controller to display the list of rights.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const rightsListController = class RightsListController {
  constructor(Api) {
    'ngInject'
    this.rights = []
    const myself = this
    Api.get('/rights', {}, {successCallback: (response) => { myself.rights = response.items }})
  }


}

export default rightsListController
