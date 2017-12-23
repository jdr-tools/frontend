/**
 * This component handles the footer component, and especially the language selection.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
const customMenuController = class customFooter {
  constructor ($translate, $translatePartialLoader) {
    this.translate = $translate
  }

  /**
   * Change the language used throughout the application.
   * @param {String} language the language you want to use, for example 'fr' or 'en'
   */
  selectLanguage (language) {
    this.translate.use(language)
  }
}

const mainMenuComponent = {
  controller: customMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/custom_footer/custom_footer.html'
}

export default mainMenuComponent
