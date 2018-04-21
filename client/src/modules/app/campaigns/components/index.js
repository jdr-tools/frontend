import campaignsCreateModal from './modals/create'
import invitations from './invitations'
import campaigns from './campaigns'

const campaignsComponents = angular.module('arkaan.frontend.campaigns.components', [campaigns, campaignsCreateModal, invitations]).name

export default campaignsComponents
