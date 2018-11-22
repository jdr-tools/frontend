const uploaderController = function uploaderControllerFunction ($scope, $timeout) {
  'ngInject'

  const vm = this

  vm.mimeTypeError = false

  vm.triggerUpload = () => {
    rawInput().click()
  }

  const rawInput = () => {
    return $(`input[name=${vm.inputName}]`)
  }

  vm.initializedInput = () => {
    $timeout(() => {
      rawInput().change(() => {
        const file = rawInput()[0].files[0]
        if ( vm.acceptedTypes == undefined || vm.isValidMimeType(file)) {
          vm.mimeTypeError = false
          vm.uploadObject[vm.uploadKey] = file
          /** This blur event here is designed to lose focus when using the control on mobile devices. */
          $timeout(() => rawInput().blur())
        }
        else {
          vm.mimeTypeError = true
        }
      })
    })
  }

  vm.isValidMimeType = (file) => {
    return _.some(vm.acceptedTypes.split(','), (mimeType) => {
      const regex = new RegExp(`^${mimeType.replace('*', '(.+)')}`)
      return (file.type.match(regex) !== null)
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
    uploadObject: '=',
    acceptedTypes: '=',
    disabled: '='
  }
}