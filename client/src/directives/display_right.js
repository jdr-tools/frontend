const displayRight = function displayRightFunction (ngIfDirective, Permissions) {
  'ngInject'

  const ngIf = ngIfDirective[0]

  return {
    transclude: ngIf.transclude,
    priority: ngIf.priority,
    terminal: ngIf.terminal,
    restrict: ngIf.restrict,
    link: function displayRightLinkFunction ($scope, $element, $attr) {
      $attr.ngIf = () => Permissions.checkPresence($attr['displayRight'])
      ngIf.link.apply(ngIf, arguments)
    }
  }
}

export default displayRight