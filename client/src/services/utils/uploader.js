export default function uploader (Api) {
  'ngInject'

  const vm = this

  vm.uploadFileObject = (url, file, options = {}) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      const parameters = {
        name: file.name,
        content: event.target.result
      }
      Api.post(url, parameters, options)
    }
    reader.readAsDataURL(file)
  }
}