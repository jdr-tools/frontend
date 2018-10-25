/**
 * This class is made to query the server side of the application to forward API calls.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const Api = function ApiFunction($http, $localStorage, $rootScope, $window, FormService) {
  'ngInject'

  const vm = this

  /**
   * Makes a post request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a body to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  vm.post = (uri, parameters = {}, options = {}) => {
    vm.makeRequest('POST', uri, parameters, options)
  }

  /**
   * Makes a get request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a querystring to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  vm.get = (uri, parameters = {}, options = {}) => {
    this.makeRequest('GET', uri, parameters, options)
  }

  /**
   * Makes a patch request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a querystring to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  vm.patch = (uri, parameters = {}, options = {}) => {
    vm.makeRequest('PATCH', uri, parameters, options)
  }

  /**
   * Makes a put request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a querystring to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  vm.put = (uri, parameters = {}, options = {}) => {
    vm.makeRequest('PUT', uri, parameters, options)
  }

  /**
   * Makes a delete request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} uri - the URL of the route you're trying to reach in the API.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */
  vm.delete = (uri, options = {}) => {
    vm.makeRequest('DELETE', uri, {}, options)
  }

  /**
   * Generic method to issue a request on the API.
   * @param {String} verb - the HTTP method employed for this request.
   * @param {String} uri - the resource location you're trying to reach on the API.
   * @param {Object} parameters - the additional parameters put in the queryString or the body, depending on the used verb.
   * @param {Object} options - an option hash used to alter the default behaviour of the method.
   */
  vm.makeRequest = (verb, uri, parameters, options) => {
    const configuration = {
      method: 'POST',
      url: '/api',
      headers: {
        X_CSRF_TOKEN: $window.jQuery('input[name=_csrf]').val()
      },
      data: angular.extend({}, parameters, {url: uri, method: verb})
    }
    if (options.skipSessionId != true) {
      configuration.data.session_id = $localStorage.token
    }
    const successCallback = (response) => {
      if(options.errorsForm) FormService.reset(options.errorsForm)
      if(options.successCallback) options.successCallback(response.data)
    }
    const errorCallback = (response) => {
      if(options.errorsForm) FormService.error(options.errorsForm, response)
      if(options.errorCallback) options.errorCallback(response.data)
      if(options.errorBroadcast) $rootScope.$broadcast(options.errorBroadcast, response)
    }
    return $http(configuration).then(successCallback, errorCallback)
  }
}

export default Api
