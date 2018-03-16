const campaignsListController = function campaignsListControllerFunction (campaignsFactory) {
  'ngInject'

  const vm = this

  campaignsFactory.list((data) => console.log(data))
}

export default campaignsListController
