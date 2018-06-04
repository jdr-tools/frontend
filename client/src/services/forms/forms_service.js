const formsService = function formsServiceFunction () {
  'ngInject'

  const service = this

  service.error = (form, response) => {
    const field = response.data.field
    const error = response.data.error
    /** If it's the first error encountered, or an error different from the last error encountered. */
    if (!form.lastError || form.lastError.field != field || form.lastError.error != error) {
      form.lastError = {error: error, field: field}
      service.reset(form)
      form[field].$setValidity(error, false)
    }
  }

  /**
   * Deletes all the errors from a form by setting all validities to true.
   * @param {Object} form - an angular form object to reset the fields of.
   */
  service.reset = (form) => {
    _.each(form.$$controls, (control) => {
      if (control.$name != '' && form[control.$name] != undefined) {
        const errorKeys = _.keys(form[control.$name].$error)
        _.each(errorKeys, (key) => form[control.$name].$setValidity(key, true))
      }
    })
  }

  return service
}

export default formsService
