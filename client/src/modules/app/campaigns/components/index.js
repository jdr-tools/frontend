import campaignCard from './campaign_card'
import campaignsCreateModal from './modals/create'
import invitations from './invitations'
import uploadModal from './modals/upload'

const campaignsComponents = angular.module('arkaan.frontend.campaigns.components', [campaignCard, campaignsCreateModal, invitations, uploadModal]).name

export default campaignsComponents
