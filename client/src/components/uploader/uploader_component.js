const uploaderController = function uploaderControllerFunction ($scope, $timeout) {
  'ngInject'

  const vm = this

  vm.triggerUpload = () => {
    rawInput().click()
  }

  const rawInput = () => {
    return $(`input[name=${vm.inputName}]`)
  }

  const resetErrors = () => {
    vm.validities = {
      type: true,
      size: true
    }
  }

  vm.initializedInput = () => {
    $timeout(() => {
      rawInput().change(() => {
        const file = rawInput()[0].files[0]
        vm.validities = {
          size: isValidSize(file),
          type: isValidType(file)
        }
        /** We upload the file if no error is found. */
        if (_.findKey(vm.validities, value => value === false) == undefined) {
          resetErrors()
          vm.uploadObject[vm.uploadKey] = file
          /** This blur event here is designed to lose focus when using the control on mobile devices. */
          $timeout(() => rawInput().blur())
        }
      })
    })
  }

  const isValidType = (file) => {
    if (vm.acceptedTypes == undefined) return true
    return _.some(vm.acceptedTypes.split(','), (mimeType) => {
      const regex = new RegExp(`^${mimeType.replace('*', '(.+)')}`)
      return (file.type.match(regex) !== null)
    })
  }

  const isValidSize = (file) => {
    return file.size < 20000000
  }

  resetErrors()
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