export default function publicCampaignsFilter () {
  return (campaigns) => {
    return _.filter(campaigns, (campaign) => {
      return _.get(campaign, 'invitation.status') !== 'accepted'
    })
  }
}