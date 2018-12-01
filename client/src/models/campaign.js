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

    addFile (content) {
      const vm = this
      Uploader.uploadFileObject(`/campaigns/${vm.id}/files`, content, {
        successCallback: (response) => {
          WebsocketNotifier.sendToCampaign(vm.id, 'campaign.file.added', Object.assign(response, {campaign_id: vm.id}))
        }
      })
    }

    removeFile (file) {
      _.remove(this.files, f => {
        return (f.id == file.id)
      })
    }
  }
}