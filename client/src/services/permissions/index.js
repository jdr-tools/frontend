import Authentication from './authentication'
import Permissions from './permissions'

const permissions = angular.module('arkaan.frontend.services.permissions', [])
  .service('Authentication', Authentication)
  .service('Permissions', Permissions)
  .name

export default permissions
