const uploaderController = function uploaderControllerFunction ($scope, $timeout) {
  'ngInject'

  const vm = this

  vm.triggerUpload = () => {
    rawInput().click()
  }

  const rawInput = () => {
    return $(`input[name=${vm.inputName}]`)
  }

  vm.initializedInput = () => {
    $timeout(() => {
      rawInput().change(() => {
        vm.uploadObject[vm.uploadKey] = rawInput()[0].files[0]
      })
    })
  }
}

export default {
  controller: uploaderController,
  controllerAs: 'vm',
  templateUrl: 'client/src/components/uploader/uploader.html',
  bindings: {
    inputName: '@',
    uploadKey: '@',
    uploadObject: '='
  }
}