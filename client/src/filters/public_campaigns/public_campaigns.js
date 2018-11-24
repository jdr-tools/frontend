export default function publicCampaignsFilter () {
  return (campaigns) => {
    return _.filter(campaigns, (campaign) => {
      return campaign.invitation.status !== 'accepted'
    })
  }
}