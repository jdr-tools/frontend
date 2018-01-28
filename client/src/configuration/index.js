import configUrlRouterProvider from './url_router_provider'
import configTranslateProvider from './translate_provider'
import configStateProvider from './state_provider'

const configuration = angular.module('arkaan.frontend.configuration', [])
  .config(configUrlRouterProvider)
  .config(configTranslateProvider)
  .config(configStateProvider)
  .name

export default configuration
