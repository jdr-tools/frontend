/**
 * Controller to display the form to create a new right.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const createRightController = class CreateRightController {
  constructor(RightsFactory) {
    'ngInject'
    this.factories ={
      rights: RightsFactory
    }
    this.rights = {}
    this.category = {
      slug: ''
    }
    this.searchRights()
  }

  createCategory () {
    console.log('création d\'une catégorie')
    this.factories.rights.createCategory(this.category, this.searchRights)
  }

  searchRights () {
    console.log('recherche des droits')
    const myself = this
    this.factories.rights.list(data => { myself.rights = data })
  }
}

export default createRightController
