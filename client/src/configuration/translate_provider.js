/**
 * This function configures the translate module to allow it to find translation files for each language.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const configTranslateProvider = function configTranslateProviderFunction ($translateProvider, $translatePartialLoaderProvider) {
  'ngInject'
  /** This adds the translations for all the possible errors from the api. */
  $translatePartialLoaderProvider.addPart('errors');
  /** This adds the translations for the common elements used throughout the whole application. */
  $translatePartialLoaderProvider.addPart('common');

  $translatePartialLoaderProvider.addPart('components/main_menu');
  $translatePartialLoaderProvider.addPart('components/custom_footer');
  
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/client/locales/{part}/{lang}.json'
  })
  $translateProvider.preferredLanguage('fr')
}

export default configTranslateProvider
