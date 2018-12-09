/**
 * This function configures the translate module to allow it to find translation files for each language.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const configTranslateProvider = function configTranslateProviderFunction ($translateProvider, $translatePartialLoaderProvider) {
  'ngInject'

  const loadedParts = ["errors", "common", "confirmations", "components/main_menu"]

  loadedParts.forEach((part) => $translatePartialLoaderProvider.addPart(part))
  
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/client/locales/{part}/{lang}.json'
  })
  $translateProvider.fallbackLanguage('fr_FR')
  $translateProvider.preferredLanguage('fr_FR')
}

export default configTranslateProvider
