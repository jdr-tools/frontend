import components from './components'
import configuration from './configuration'
import directives from './directives'
import factories from './factories'
import filters from './filters'
import models from './models'
import modules from './modules'
import running from './app.run.js'
import services from './services'

const dependencies = [
  'ngStorage',
  'ngMaterial',
  'ngMessages',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.router',
  'uiSwitch',
  components,
  configuration,
  directives,
  factories,
  filters,
  models,
  modules,
  services
]

angular.module('arkaan.frontend', dependencies)
  .run(running)