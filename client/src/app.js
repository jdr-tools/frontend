import components from './components'
import configuration from './configuration'
import directives from './directives'
import factories from './factories'
import modules from './modules'
import running from './app.run.js'
import services from './services'

const dependencies = [
  'ngStorage',
  'ngMaterial',
  'ngMessages',
  'pascalprecht.translate',
  'ui.router',
  components,
  configuration,
  directives,
  factories,
  modules,
  services
]

angular.module('arkaan.frontend', dependencies)
  .run(running)