import configUrlRouterProvider from './url_router_provider'
import configTranslateProvider from './translate_provider'

const configuration = angular.module('arkaan.frontend.configuration', [])
  .config(configUrlRouterProvider)
  .config(configTranslateProvider)
  .name

export default configuration
