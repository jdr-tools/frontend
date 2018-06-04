const configStateProvider = ($stateProvider) => {
  'ngInject'
  $stateProvider.state({
    name: 'app',
    templateUrl: 'client/src/modules/app/index.html',
    resolve: {
      setSection: ($rootScope) => {
        $rootScope.section = 'app'
      }
    }
  })
  $stateProvider.state({
    name: 'admin',
    templateUrl: 'client/src/modules/admin/index.html',
    resolve: {
      setSection: ($rootScope) => {
        $rootScope.section = 'admin'
      }
    }
  })
}

export default configStateProvider
