export default class invitationsFactory {

  /**
   * Constructor for the service, injecting dependencies.
   * @param {object} Api - the Api class to make calls on the backend.
   * @param {object} WebsocketNotifier - the notifier for the websocket to warn other players of the updates.
   */
  constructor (Api, WebsocketNotifier) {
    'ngInject';
    this.api = Api;
    this.ws = WebsocketNotifier;
  }

  /**
   * Changes the status of the invitation by updating it in the database.
   * @param {object} invitation - the invitation to update, linking a player and a campaign.
   * @param {string} status - a valid status to update the invitation with, see the gem to know which status are accepted.
   * @param {function} callback - an optional callback to invoke when the update is correctly done.
   */
  changeStatus (invitation, status, callback) {
    return this.api.put(`/invitations/${invitation.id}`, {status: status}, {successCallback: response => {
      const invit = response.item
      this.ws.sendToCampaign(invit.campaign.id, 'invitation.update', invit)
      if (typeof callback === 'function') callback(invit)
    }})
  }

  /**
   * Updates the invitation as expelled, so that the player can no longer access the campaign.
   * @param {object} invitation - the invitation to update.
   */
  expel (invitation) {
    return changeStatus(invitation, 'expelled');
  }

  /**
   * Gets the invitations for the currently connected user.
   * @param {function} callback - the function to call when the list is successfully obtained.
   */
  own (callback) {
    return this.api.get('/invitations', {}, {successCallback: callback})
  }

  /**
   * Removes an invitation, marking it as "refused" when it was either pending or request.
   * @param {object} invitation - the invitation to mark as refused.
   * @param {function} callback - the function to call when the deletion is correctly made.
   */
  remove (invitation, callback) {
    return this.api.delete(`/invitations/${invitation.id}`, {successCallback: callback})
  }
}