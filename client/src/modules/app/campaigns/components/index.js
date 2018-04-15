import campaignsCreateModal from './modals/create'
import invitations from './invitations'
import campaign from './campaign'

const campaignsComponents = angular.module('arkaan.frontend.campaigns.components', [campaign, campaignsCreateModal, invitations]).name

export default campaignsComponents
