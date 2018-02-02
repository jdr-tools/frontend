/**
 * Controller to display the list of rights.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const rightsListController = function rightsListControllerFunction ($state, CategoriesFactory, RightsFactory) {
  'ngInject'

  const vm = this

  /** The list of categories as obtained by the API. */
  vm.categories = []
  /** structure representing an empty category, used when creating it. */
  vm.category = {slug: ''}
  /** List of the models of the new rights fields, one for each category. */
  vm.rights = {}

  /** Creates a new category with the content of the category slug field, then refreshes the rights list. */
  vm.createCategory = () => {
    CategoriesFactory.create(vm.category, vm.getRights)
  }

  /**
   * Creates a right in the given category, retrieving its content in the corresponding field, then refreshes the list of rights.
   * @param {String} category_id - the unique identifier of the category to create the right in.
   */
  vm.createRight = (category_id) => {
    RightsFactory.create(category_id, vm.rights[category_id], vm.getRights)
  }

  /**
   * Deletes a category of rights and refreshes the list of rights.
   * @param {String} category_id -  the unique identifier of the category you want to delete.
   */
  vm.deleteCategory = (category_id) => {
    CategoriesFactory.delete(category_id, vm.getRights)
  }

  /**
   * Deletes a right given its unique identifier.
   * @param {String} right_id - the unique identifier of the right to delete.
   */
  vm.deleteRight = (right_id) => {
    RightsFactory.delete(right_id, vm.getRights)
  }

  /** Refreshes the list of rights. */
  vm.getRights = () => {
    RightsFactory.list(vm.setCategories)
  }

  /**
   * Sets the list of categories to display in the interface and resets the different rights fields.
   * @param {Array<Object>} categories - an array of categories to display in the GUI.
   */
  vm.setCategories = (categories) => {
    vm.category.slug = ''
    vm.categories = categories.items
    vm.rights = {}
    vm.categories.forEach((item) => {
      vm.rights[item.id] = ''
    })
  }

  vm.getRights()
}

export default rightsListController
