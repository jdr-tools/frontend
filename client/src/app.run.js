const running = function runningFunction ($document, $localStorage, $translate, $window, Authentication, WebsocketChannel) {
  'ngInject'

  if ($localStorage.token !== undefined) WebsocketChannel.setup()

  const resizeMainContainer = () => {
    $window.jQuery('.layout-container').height(`${$window.innerHeight}px`)
  }

  /** This line resets the height of the container to better handle mobile top bars. */
  $window.jQuery($document).ready(resizeMainContainer)
  /** The height of the main container should be resetted when resizing it. */
  $window.jQuery($window).resize(resizeMainContainer)

  Authentication.checkAndRedirect()

  /** Use the stored language if it exists. */
  if (_.has($localStorage, 'account.language')) {
    $translate.use($localStorage.account.language)
  }
}

export default running
