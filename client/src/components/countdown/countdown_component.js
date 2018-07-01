const countdownController = function countdownControllerFunction ($interval, $rootScope) {
  'ngInject'

  const vm = this

  vm.initialized = false

  $rootScope.$watch('vm.startValue', () => {
    if (vm.startValue != undefined && !vm.initialized) {
      vm.currentValue = vm.startValue
      $interval(vm.setCountdownValue, 1000)
      vm.initialized = true
    }
  })

  vm.setCountdownValue = () => {
    vm.currentValue = (vm.currentValue == 0) ? vm.startValue : vm.currentValue - 1
  }
}

export default {
  controller: countdownController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/countdown/countdown.html',
  bindings: {
    startValue: '='
  }
}