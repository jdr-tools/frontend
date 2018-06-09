const confirmation = function confirmationFunction () {
  'ngInject'

  this.trigger = (event, data) => {
    $rootScope.$broadcast('confirmation.show', event, data)
  }
}

export default confirmation
