const accountsCreateController = class AccountsCreateController {
  constructor(Api) {
    'ngInject'
    this.account = {
      username: '',
      password: '',
      password_confirmation: '',
      email: '',
      lastname: '',
      firstname: '',
      birthdate: new Date(1970, 0, 0, 0, 0, 0)
    }
    this.api = Api
    this.confirmation = false
    this.errors = false
  }

  createAccount () {
    const me = this
    this.api.post('/accounts', this.account, {
      successCallback: () => me.confirm(),
      errorCallback: (response) => me.displayErrors(response)
    })
  }

  confirm () {
    this.confirmation = true
    this.errors = false
  }

  displayErrors (response) {
    this.errors = response.errors
    this.confirmation = false
  }
}

export default accountsCreateController