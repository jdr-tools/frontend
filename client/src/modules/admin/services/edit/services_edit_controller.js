export default function servicesEditController ($mdToast, $state, Service, Api) {
  'ngInject'

  const vm = this

  vm.service = new Service($state.params.id)

  vm.purge = (instance) => {
    Api.post('/websockets/purge', {instance_id: instance.id}, {
      successCallback: (response) => {

        $mdToast.show($mdToast.simple()
          .position('bottom right')
          .textContent('Action effectuée avec succès')
          .hideDelay(2000))
      },
      errorCallback: (response) => {

        $mdToast.show($mdToast.simple()
          .position('bottom right')
          .textContent('Echec lors de la purge')
          .hideDelay(2000))
      }
    })
  }
}