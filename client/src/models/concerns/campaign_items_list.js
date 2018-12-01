export default function campaignsItemsListFactory (Api) {
  'ngInject'

  const campaignItemsList = function campaignsListFunction (campaign_id, urlSuffix) {
    const vm = this

    /** The internal list of items. */
    vm.items = []
    /** The state is initialized with a filler value so that all state methods return false. */
    vm.state = 'started'
    /** We keep the identifier of the campaign the messages are from. */
    vm.campaign_id = campaign_id

    vm.urlSuffix = urlSuffix

    /**
     * Separate method to load the files so that the call can be re-made when it first fails.
     * @param {Object} campaign - a campaign as returned from the API, with the :id field.
     */
    vm.reload = () => {
      vm.state = 'loading'
      Api.get(`/campaigns/${campaign_id}/${vm.urlSuffix}`, {}, {
        successCallback: response => {
          if (typeof vm.successCallback !== 'function') {
            vm.successCallback = response => {
              vm.items = response
            }
          }
          vm.successCallback(response)
          vm.setState(response.length == 0 ? 'empty' : 'loaded')
        },
        errorCallback: () => vm.setState('error')
      })
    }

    /**
     * Sets the state of the list (loaded, loading or error)
     * @param {String} state - the value to assign to the state.
     */
    vm.setState = (state) => {
      vm.state = state
    }

    /**
     * Inserts a new item in the files list.
     * @param {Object} item - the new item returned byt the API.
     */
    vm.insert = (item) => {
      vm.items.push(item)
      if (typeof vm.afterInsert === 'function') vm.afterInsert(item)
    }

    /**
     * Removes a item from the list, without deleting it remotely.
     * @param {Object} item - the item to remove from the list.
     */
    vm.remove = (item) => _.remove(vm.items, f => f.id == item.id)

    /**
     * Checks if the files list is currently empty.
     * @return {Boolean} TRUE if the list is empty, FALSE otherwise.
     */
    vm.empty = () => vm.items.length === 0

    vm.reload()
  }

  return (campaignItemsList)
}