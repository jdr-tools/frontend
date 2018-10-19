export default function campaignFactory ($localStorage, Api) {
  'ngInject'

  return class Campaign {
    constructor (id) {
      const vm = this
      Api.get(`/campaigns/${id}`, {}, {successCallback: (response) => Object.assign(vm, response)})
      Api.get(`/campaigns/${id}/messages`, {}, {
        successCallback: (response) => {
          vm.messages = response
        }
      })
    }

    addMessage (content)  {
      const vm = this
      const params = {content: content}
      const options = {
        successCallback: (response) => {
          vm.messages.push({username: $localStorage.account.username, content: content})
        }
      }
      Api.post(`/campaigns/${vm.id}/messages`, params, options)
    }
  }
}