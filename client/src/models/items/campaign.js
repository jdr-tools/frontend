export default function campaignFactory ($filter, $rootScope, $timeout, $localStorage, Api, WebsocketNotifier, Uploader, FilesList, MessagesList) {
  'ngInject'

  return class Campaign {
    constructor (id) {
      const vm = this
      vm.isCreator = false
      vm.hasMessages = false
      Api.get(`/campaigns/${id}`, {}, {
        successCallback: (response) => {
          Object.assign(vm, response)
          vm.isCreator = _.get($localStorage, 'account.username', false) == _.get(response, 'creator.username', true)
        }
      })
      vm.messages = new MessagesList(id)
      vm.files = new FilesList(id)
    }

    insertFile (file) {
      this.files.insert(file)
    }

    removeFile (file) {
      _.remove(this.files, f => {
        return (f.id == file.id)
      })
    }
  }
}