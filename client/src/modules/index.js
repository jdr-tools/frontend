import appModules from './app'
import adminModules from './admin'

/** Add new modules in the list so that it is automatically added to the whole application */
const modulesList = [appModules, adminModules]

const modules = angular.module('arkaan.frontend.modules', modulesList).name

export default modules
