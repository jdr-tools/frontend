import dashboard from './dashboard'
import accounts from './accounts'
import login from './login'

/** Add new modules in the list so that it is automatically added to the whole application */
const modulesList = [dashboard, accounts, login]

const modules = angular.module('arkaan.frontend.modules', modulesList).name

export default modules
