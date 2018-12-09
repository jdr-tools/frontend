export default function campaignFactory ($localStorage, Api, FilesList, MessagesList) {
  'ngInject'

  /**
   * This class is the representation of a campaign. It holds the objects to describe its messages and files too.
   * @author Vincent Courtois <courtois.vincent@outlook.com>
   */
  return class Campaign {

    /**
     * Constructor of the class, initializing all the elements concerning a campaign.
     * @param {String} id - the unique identifier of the campaign, as stored in the database.
     */
    constructor (id) {
      const vm = this

      vm.getData(id)
      vm.messages = new MessagesList(id)
      vm.files = new FilesList(id)
    }

    /**
     * Makes the request to get the data from a campaign on the API.
     * @param {String} id - the unique identifier of the campaign, as stored in the database.
     */
    getData (id) {
      Api.get(`/campaigns/${id}`, {}, {
        successCallback: (response) => Object.assign(this, response)
      })
    }

    /**
     * Checks if the currently connected user is the creator of this campaign.
     * @return {Boolean} TRUE if the current user is the creator of the campaign, FALSE otherwise.
     */
    isCreator() {
      const username = _.get($localStorage, 'account.username', true)
      const creator = _.get(this, 'creator.username', false)

      console.log(username, creator)
      return username === creator
    }
  }
}