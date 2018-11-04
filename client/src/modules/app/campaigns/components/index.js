import campaignsCreateModal from './modals/create'
import invitations from './invitations'
import uploadModal from './modals/upload'

const campaignsComponents = angular.module('arkaan.frontend.campaigns.components', [campaignsCreateModal, invitations, uploadModal]).name

export default campaignsComponents
