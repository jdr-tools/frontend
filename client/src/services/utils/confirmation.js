const confirmation = function confirmationFunction ($filter, $mdDialog, $rootScope) {
  'ngInject'

  const vm = this

  /**
   * Triggers a confirmation modal to ask the user if s.he really wants to do a particular action.
   * @param {String} event - the angular event to trigger when the modal is confirmed.
   * @param {Object} data - the additionnal data passed to the modal.
   */
  vm.trigger = (event, data) => {

    vm.translate = $filter('translate')

    const confirmation = $mdDialog.confirm()
      .title(vm.translate(`confirmation_titles.${event}`, data))
      .textContent(vm.translate(`confirmations.${event}`, data))
      .ok(vm.translate('common.confirm'))
      .cancel(vm.translate('common.cancel'))

    $mdDialog.show(confirmation).then(vm.confirm(event, data), vm.cancel)
  }

  /**
   * Creates a callback confirmation function for the confirmation modale. DO NOT use separately.
   * @param {String} event - the event to trigger when the modal is confirmed.
   * @param {Object} data - the additionnal data passed to the modal.
   * @return {Function} the created callback given to the modal to call when confirmed.
   */
  vm.confirm = (event, data) => {
    return () => {
      $rootScope.$broadcast(event, data)
      $mdDialog.hide()
    }
  }

  vm.cancel = () => $mdDialog.hide()
}

export default confirmation
