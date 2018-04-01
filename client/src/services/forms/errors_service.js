const errorsService = function errorServiceFunction () {
  'ngInject'

  const service = this

  /**
   * Appends the errors contained in the response to the form.
   * @param {Object} form - the form to append the errors to.
   * @param {Object} response - a response boy from the API, containing the key 'errors'.
   */
  service.append = (form, response) => {
    if (_.has(response, 'errors')) {
      _.each(response.errors, (error) => {
        const split = _.split(error, '.')
        form[split[1]].$setValidity(split[2], false)
      })
    }
    else if (_.has(response, 'message') && response.message.indexOf('missing.') >= 0) {
      const split = _.split(response.message, '.')
      form[split[1]].$setValidity('required', false)
    }
  }

  return service
}

export default errorsService
