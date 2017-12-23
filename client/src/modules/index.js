import dashboard from './dashboard'
import accounts from './accounts'
import sessions from './sessions'

/** Add new modules in the list so that it is automatically added to the whole application */
const modulesList = [dashboard, accounts, sessions]

const modules = angular.module('arkaan.frontend.modules', modulesList).name

export default modules
