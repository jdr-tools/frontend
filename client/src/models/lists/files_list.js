export default function filesListFactory ($timeout, Api, WebsocketNotifier) {
  'ngInject'

  const filesList = function filesListFunction (campaign) {
    const vm = this

    /** The internal list of items. */
    vm.items = []
    /** The state is initialized with a filler value so that all state methods return false. */
    vm.state = 'started'
    /** We keep the identifier of the campaign the files are from. */
    vm.campaign_id = undefined

    /**
     * Separate method to load the files so that the call can be re-made when it first fails.
     * @param {Object} campaign - a campaign as returned from the API, with the :id field.
     */
    vm.reload = (campaign_id) => {
      vm.state = 'loading'
      vm.campaign_id = campaign_id
      Api.get(`/campaigns/${vm.campaign_id}/files`, {}, {
        successCallback: response => {
          $timeout(() => {
            vm.items = _.map(response, file => Object.assign({campaign_id: vm.campaign_id}, file))
            vm.setState('loaded')
          }, 1500)
        },
        errorCallback: () => {
          $timeout(() => {
            vm.setState('error')
          }, 1500)
        }
      })
    }

    /**
     * Checks if the files list has been incorrectly loaded and caused an error.
     * @return {Boolean} TRUE if the files are NOT loaded and have caused an error, FALSE otherwise.
     *
     */
    vm.inError = () => vm.state === 'error'

    /**
     * Method indicating that the files have correctly been loaded.
     * @return {Boolean} TRUE if the files have correctly been loaded, FALSE otherwise.
     */
    vm.isLoaded = () => vm.state === 'loaded'

    /**
     * Method indicating that the request for the files list is currently executing.
     * @return {Boolean} TRUE if the files are currently loading, FALSE otherwise.
     */
    vm.isLoading = () => vm.state === 'loading'

    vm.setState = (state) => {
      vm.state = state
    }

    /**
     * Returns the number of files in the list.
     * @return {Integer} the number of files currently loaded.
     */
    vm.count = () => vm.items.length

    /**
     * Checks if the files list is currently empty.
     * @return {Boolean} TRUE if the list is empty, FALSE otherwise.
     */
    vm.empty = () => this.count() === 0

    /**
     * Inserts a new file in the files list.
     * @param {Object} file - the new file returned byt the API.
     */
    vm.insert = (file) => vm.items.push(file)

    /**
     * Removes a file from the list, without deleting it remotely.
     * @param {Object} file - the file to remove from the list.
     */
    vm.remove = (file) => _.remove(vm.items, f => f.id == file.id)

    /**
     * Deletes a file and notify the application it has been deleted.
     * @param {Object} file - the file to delete.
     */
    vm.delete = (file) => {
      Api.delete(`/campaigns/${vm.campaign_id}/files/${file.id}`, {
        successCallback: () => {
          WebsocketNotifier.sendToCampaign(vm.campaign_id, 'campaign.file.deleted', file)
        }
      })
    }

    vm.reload(campaign)
  }

  return (filesList)
}