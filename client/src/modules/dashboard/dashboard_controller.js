const dashboardController = class DashboardController {
  constructor(Api) {
    'ngInject'
    this.dashboardMessage = Api.post('url', {}, {})
  }
}

export default dashboardController