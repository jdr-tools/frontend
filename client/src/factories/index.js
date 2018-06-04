import accountsFactory from './accounts_factory'
import CampaignsFactory from './campaigns_factory.js'
import categoriesFactory from './categories_factory.js'
import groupsFactory from './groups_factory.js'
import invitationsFactory from './invitations_factory.js'
import rightsFactory from './rights_factory.js'
import servicesFactory from './services_factory.js'

const factories = angular.module('arkaan.frontend.factories', [])
  .factory('AccountsFactory', accountsFactory)
  .factory('CampaignsFactory', CampaignsFactory)
  .factory('CategoriesFactory', categoriesFactory)
  .factory('GroupsFactory', groupsFactory)
  .factory('InvitationsFactory', invitationsFactory)
  .factory('RightsFactory', rightsFactory)
  .factory('ServicesFactory', servicesFactory)
  .name

export default factories
