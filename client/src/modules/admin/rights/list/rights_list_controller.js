/**
 * Controller to display the list of rights.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const rightsListController = class RightsListController {
  constructor($state, RightsFactory) {
    'ngInject'
    this.categories = []
    this.state = $state
    this.factories = {rights: RightsFactory}
    this.category = {slug: ''}
    this.searchRights()
  }

  createRight (category) {
    console.log(category)
    console.log(this.rights[category])
  }

  createCategory () {
    this.factories.rights.createCategory(this.category, this.searchRights)
  }

  searchRights () {
    const myself = this
    this.factories.rights.list(data => { myself.setCategories(data.items) })
  }

  setCategories (items) {
    const myself = this
    this.categories = items
    this.rights = {}
    this.categories.forEach((item) => {
      myself.rights[item] = ''
    })
  }
}

export default rightsListController
