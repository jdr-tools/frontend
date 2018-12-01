export default function filesListFactory (Api, WebsocketNotifier, CampaignItemsList) {
  'ngInject'

  /**
   * Represents the files uploaded inside a campaign.
   * @author Vincent Courtois <courtois.vincent@outlook.com>
   */
  const filesList = function filesListFunction (campaign_id) {
    const vm = this

    /**
     * Separate method to load the files so that the call can be re-made when it first fails.
     * @param {Object} campaign - a campaign as returned from the API, with the :id field.
     */
    vm.successCallback = response => {
      vm.items = _.map(response, file => Object.assign({campaign_id: vm.campaign_id}, file))
    }

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

    CampaignItemsList.call(vm, campaign_id, 'files')
  }

  return (filesList)
}