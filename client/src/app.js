import components from './components'
import configuration from './configuration'
import modules from './modules'
import services from './services'

angular.module('arkaan.frontend', ['ui.router', 'ngStorage', components, configuration, modules, services])
