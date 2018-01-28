import dashboard from './dashboard'
import accounts from './accounts'
import sessions from './sessions'

/** Add new modules in the list so that it is automatically added to the whole application */
const appModulesList = [dashboard, accounts, sessions]

const appModules = angular.module('arkaan.frontend.app', appModulesList).name

export default appModules
