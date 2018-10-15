import servicesList from './services_list'

export default angular.module('arkaan.frontend.models.lists', [])
  .factory('ServicesList', servicesList)
  .name