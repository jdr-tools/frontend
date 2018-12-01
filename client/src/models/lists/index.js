import filesList from './files_list'
import messagesList from './messages_list'
import servicesList from './services_list'

export default angular.module('arkaan.frontend.models.lists', [])
  .factory('FilesList', filesList)
  .factory('MessagesList', messagesList)
  .factory('ServicesList', servicesList)
  .name