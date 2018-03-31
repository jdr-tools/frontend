import accounts from './accounts'
import campaigns from './campaigns'
import dashboard from './dashboard'
import profile from './profile' 
import sessions from './sessions'

/** Add new modules in the list so that it is automatically added to the whole application */
const appModulesList = [accounts, campaigns, dashboard, profile, sessions]

const appModules = angular.module('arkaan.frontend.app', appModulesList).name

export default appModules
