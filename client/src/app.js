import components from './components'
import configuration from './configuration'
import directives from './directives'
import factories from './factories'
import modules from './modules'
import services from './services'

angular.module('arkaan.frontend', ['ngStorage', 'ngMaterial', 'ngMessages', 'pascalprecht.translate', 'ui.router', components, configuration, directives, factories, modules, services])

