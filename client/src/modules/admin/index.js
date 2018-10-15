import adminDashboard from './dashboard'
import groups from './groups'
import rights from './rights'
import services from './services'

/** Add new modules in the list so that it is automatically added to the whole application */
const adminModulesList = [adminDashboard, groups, rights, services]

const adminModules = angular.module('arkaan.frontend.admin', adminModulesList).name

export default adminModules
