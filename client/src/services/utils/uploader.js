export default function uploader (Api) {
  'ngInject'

  const vm = this

  vm.uploadFileObject = (url, file) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const parameters = {
        name: file.name,
        size: file.size,
        type: file.type,
        content: event.target.result
      }
      Api.post(url, parameters, {
        successCallback: (response) => {
          console.log(response)
        }
      })
    }
    reader.readAsDataURL(file)
  }
}