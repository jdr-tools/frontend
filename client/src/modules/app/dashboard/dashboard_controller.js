const dashboardController = class DashboardController {
  constructor(Api, $scope) {
    'ngInject'

    const vm = this;

    vm.section = $scope.section;
  }
}

export default dashboardController