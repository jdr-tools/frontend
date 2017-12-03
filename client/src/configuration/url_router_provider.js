/**
 * This function configures the router to redirect automatically to /dashboard when the user arrives on the /
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const configUrlRouterProvider = function configUrlRouterProviderFunction ($urlRouterProvider) {
  'ngInject'
  $urlRouterProvider.otherwise('/dashboard')
}

export default configUrlRouterProvider
