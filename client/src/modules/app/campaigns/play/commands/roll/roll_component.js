const diceRollController = function diceRollControllerFunction ($scope) {
  'ngInject'

  const vm = this

  /**
   * Boolean indicating whether details are displayed (TRUE) or not (FALSE)
   * @var {Boolean} details
   */
  vm.details = false

  $scope.$watch('vm.message', message => {
    vm.total = computeTotal(message)
  })

  /**
   * Computes the total value of the sum of the rolls for this message.
   * @param {Object} message - the message object to compute the total from.
   * @return {Integer} the sum of all the rolls for this dice roll.
   */
  const computeTotal = (message) => {
    if (message == undefined) return 0
    const rollTotals = _.map(message.data.rolls, roll => _.sum(roll.results))
    return _.sum(rollTotals) + message.data.modifier
  }

  /**
   * Opens or closes the details, depending on the previous state it was in.
   */
  vm.toggleDetails = () => {
    vm.details = !vm.details
  }
}

export default {
  controller: diceRollController,
  controllerAs: 'vm',
  templateUrl: '/client/src/modules/app/campaigns/play/commands/roll/roll.html',
  bindings: {
    message: '='
  }
}