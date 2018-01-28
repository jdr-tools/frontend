import rights from './rights'
import adminDashboard from './dashboard'

/** Add new modules in the list so that it is automatically added to the whole application */
const adminModulesList = [adminDashboard, rights]

const adminModules = angular.module('arkaan.frontend.admin', adminModulesList).name

export default adminModules
