export default function websocketNotifier ($rootScope, Api) {
  'ngInject'

  const vm = this

  vm.sendToUsername = (username, message, data) => {
    sendNotification({username: username}, message, data)
  }

  vm.sendToAccount = (account_id, message, data) => {
    sendNotification({account_id: account_id}, message, data)
  }

  vm.sendToAccounts = (account_ids, message, data) => {
    sendNotification({account_ids: account_ids}, message, data)
  }

  vm.sendToCampaign = (campaign_id, message, data) => {
    vm.sendToCampaignAndNotMyself(campaign_id, message, data)
    $rootScope.$broadcast(message, data)
  }

  vm.sendToCampaignAndNotMyself = (campaign_id, message, data) => {
    sendNotification({campaign_id: campaign_id}, message, data)
  }

  const sendNotification = (parameters, message, data) => {
    console.log(`Envoi du message ${message}`)
    Api.post('/repartitor/messages', Object.assign(parameters, {message, data}))
  }
}