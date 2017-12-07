/**
 * This class is made to query the server side of the application to forward API calls.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Api = class ApiClass {

  /**
   * Constructor of the class, initializing needed variables
   * @param {Object} $http - the HTTP requests maker service used to query the API server-side.
   */
  constructor ($http, $window) {
    'ngInject'
    this.http = $http
    this.jquery = $window.jQuery
  }

  /**
   * Makes a post request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a body to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  post (uri, parameters, options) {
    this.makeRequest('POST', uri, parameters, options)
  }

  /**
   * Generic method to issue a request on the API.
   * @param {String} verb - the HTTP method employed for this request.
   * @param {String} uri - the resource location you're trying to reach on the API.
   * @param {Object} parameters - the additional parameters put in the queryString or the body, depending on the used verb.
   * @param {Object} options - an option hash used to alter the default behaviour of the method.
   */
  makeRequest (verb, uri, parameter, options) {
    const configuration = {
      method: verb,
      url: uri,
      headers: {
        X_CSRF_TOKEN: this.jquery('input[name=_csrf]')
      }
    }
    const successCallback = (response) => {
      if(options.successCallback) options.successCallback(response)
    }
    const errorCallback = (response) => {
      if(options.errorCallback) options.errorCallback(response)
    }
    return this.http(configuration).then(successCallback, errorCallback)
  }
}

export default Api
