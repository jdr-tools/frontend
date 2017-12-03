/**
 * This class is made to query the server side of the application to forward API calls.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Api = class ApiClass {

  /**
   * Constructor of the class, initializing needed variables
   * @param {Object} $http - the HTTP requests maker service used to query the API server-side.
   */
  constructor ($http) {
    'ngInject'
    this.http = $http
  }

  /**
   * Makes a post request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} url - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a body to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  post (url, parameters, options) {
    return 'Je compte faire une requête en post pour vérifier un truc sur l\'API'
  }
}

export default Api
