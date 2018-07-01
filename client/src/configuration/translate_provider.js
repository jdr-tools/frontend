/**
 * This function configures the translate module to allow it to find translation files for each language.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const configTranslateProvider = function configTranslateProviderFunction ($translateProvider, $translatePartialLoaderProvider) {
  'ngInject'

  const loadedParts = ["errors", "common", "confirmations", "components/main_menu", "components/custom_footer", "components/countdown"]

  loadedParts.forEach((part) => $translatePartialLoaderProvider.addPart(part))
  
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/client/locales/{part}/{lang}.json'
  })
  $translateProvider.preferredLanguage('fr')
}

export default configTranslateProvider
