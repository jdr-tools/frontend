import components from './components'
import configuration from './configuration'
import modules from './modules'
import services from './services'

angular.module('arkaan.frontend', ['ngStorage', 'pascalprecht.translate', 'ui.router', components, configuration, modules, services])
