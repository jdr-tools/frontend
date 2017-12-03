import configUrlRouterProvider from './url_router_provider'

const configuration = angular.module('arkaan.configuration', [])
  .config(configUrlRouterProvider)
  .name

export default configuration
