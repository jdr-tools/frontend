const confirmationModalController = function confirmationModalControllerFunction ($mdDialog, $rootScope) {
  'ngInject'

  const vm = this

  vm.initialize = () => {
    /** The current confirmation object gathering the event to fire when the modale is confirmed, and the additional data. */
    vm.currentConfirmation = {event: false, data: false}
  }

  const confirmationController = ($scope, $mdDialog) => {

    $scope.translation = `confirmations.${vm.currentConfirmation.event}`

    $scope.title = `confirmation_titles.${vm.currentConfirmation.event}`

    $scope.data = vm.currentConfirmation.data

    $scope.close = () => {
      $mdDialog.hide()
    }

    $scope.confirm = () => {
      $rootScope.$broadcast(vm.currentConfirmation.event, vm.currentConfirmation.data)
      $mdDialog.hide()
    }
  }

  $rootScope.$on('confirmation.show', (e, event, data) => {
    vm.currentConfirmation = {
      event: event,
      data: data
    }
    $mdDialog.show({
      controller: confirmationController,
      templateUrl: 'client/src/components/confirmation_modal/confirmation_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true
    })
    .then(vm.initialize)
  })
}

export default {
  controller: confirmationModalController,
  controllerAs: 'vm',
  templateUrl: '/client/src/components/confirmation_modal/confirmation_modal.html'
}