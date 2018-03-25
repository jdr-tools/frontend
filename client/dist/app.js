(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _directives = require('./directives');

var _directives2 = _interopRequireDefault(_directives);

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('arkaan.frontend', ['ngStorage', 'ngMaterial', 'pascalprecht.translate', 'ui.router', _components2.default, _configuration2.default, _directives2.default, _modules2.default, _services2.default]);

},{"./components":4,"./configuration":10,"./directives":15,"./modules":51,"./services":53}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var customMenuController = function () {
  function customFooter($translate, $translatePartialLoader) {
    _classCallCheck(this, customFooter);

    this.translate = $translate;
  }



  _createClass(customFooter, [{
    key: 'selectLanguage',
    value: function selectLanguage(language) {
      this.translate.use(language);
    }
  }]);

  return customFooter;
}();

var mainMenuComponent = {
  controller: customMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/custom_footer/custom_footer.html'
};

exports.default = mainMenuComponent;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _custom_footer_component = require('./custom_footer_component');

var _custom_footer_component2 = _interopRequireDefault(_custom_footer_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customFooter = angular.module('arkaan.frontend.components.custom_footer', []).component('customFooter', _custom_footer_component2.default).name;

exports.default = customFooter;

},{"./custom_footer_component":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menus = require('./menus');

var _menus2 = _interopRequireDefault(_menus);

var _custom_footer = require('./custom_footer');

var _custom_footer2 = _interopRequireDefault(_custom_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsList = [_menus2.default, _custom_footer2.default];

var components = angular.module('arkaan.frontend.components', componentsList).name;

exports.default = components;

},{"./custom_footer":3,"./menus":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adminMenuController = function MainMenu(Authentication, $rootScope) {
  'ngInject';

  _classCallCheck(this, MainMenu);

  this.auth = Authentication;
  this.authenticated = Authentication.checkSessionKeysPresence(false);
};

var adminMenuComponent = {
  controller: adminMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/menus/admin/admin_menu.html'
};

exports.default = adminMenuComponent;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _admin_menu_component = require('./admin_menu_component');

var _admin_menu_component2 = _interopRequireDefault(_admin_menu_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminMenu = angular.module('arkaan.frontend.components.menus.admin', []).component('adminMenu', _admin_menu_component2.default).name;

exports.default = adminMenu;

},{"./admin_menu_component":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appMenuController = function () {
  function MainMenu(Authentication, $localStorage, $rootScope) {
    'ngInject';

    _classCallCheck(this, MainMenu);

    this.auth = Authentication;
    this.authenticated = Authentication.checkSessionKeysPresence(false);
    this.storage = $localStorage;
    this.setUsername();

    var me = this;
    $rootScope.$on('loginSuccessful', function () {
      me.authenticated = true;
      me.setUsername();
    });
  }



  _createClass(MainMenu, [{
    key: 'logout',
    value: function logout() {
      this.authenticated = false;
      this.auth.destroyUserSession();
    }
  }, {
    key: 'setUsername',
    value: function setUsername() {
      if (this.authenticated) {
        this.username = this.storage.account.username;
      }
    }
  }]);

  return MainMenu;
}();

var appMenuComponent = {
  controller: appMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/menus/app/app_menu.html'
};

exports.default = appMenuComponent;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app_menu_component = require('./app_menu_component');

var _app_menu_component2 = _interopRequireDefault(_app_menu_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appMenu = angular.module('arkaan.frontend.components.menus.app', []).component('appMenu', _app_menu_component2.default).name;

exports.default = appMenu;

},{"./app_menu_component":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menus = angular.module('arkaan.frontend.components.menus', [_app2.default, _admin2.default]).name;

exports.default = menus;

},{"./admin":6,"./app":8}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url_router_provider = require('./url_router_provider');

var _url_router_provider2 = _interopRequireDefault(_url_router_provider);

var _translate_provider = require('./translate_provider');

var _translate_provider2 = _interopRequireDefault(_translate_provider);

var _state_provider = require('./state_provider');

var _state_provider2 = _interopRequireDefault(_state_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = angular.module('arkaan.frontend.configuration', []).config(_url_router_provider2.default).config(_translate_provider2.default).config(_state_provider2.default).name;

exports.default = configuration;

},{"./state_provider":11,"./translate_provider":12,"./url_router_provider":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configStateProvider = function configStateProvider($stateProvider) {
  'ngInject';

  $stateProvider.state({
    name: 'app',
    templateUrl: 'src/modules/app/index.html',
    resolve: {
      setSection: function setSection($rootScope) {
        $rootScope.section = 'app';
      }
    }
  });
  $stateProvider.state({
    name: 'admin',
    templateUrl: 'src/modules/admin/index.html',
    resolve: {
      setSection: function setSection($rootScope) {
        $rootScope.section = 'admin';
      }
    }
  });
};

exports.default = configStateProvider;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configTranslateProvider = function configTranslateProviderFunction($translateProvider, $translatePartialLoaderProvider) {
  'ngInject';

  $translatePartialLoaderProvider.addPart('errors');
  $translatePartialLoaderProvider.addPart('common');

  $translatePartialLoaderProvider.addPart('components/main_menu');
  $translatePartialLoaderProvider.addPart('components/custom_footer');

  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/locales/{part}/{lang}.json'
  });
  $translateProvider.preferredLanguage('fr');
};

exports.default = configTranslateProvider;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configUrlRouterProvider = function configUrlRouterProviderFunction($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/dashboard');
};

exports.default = configUrlRouterProvider;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var displayRight = function displayRightFunction(ngIfDirective, Permissions) {
  'ngInject';

  var ngIf = ngIfDirective[0];

  return {
    transclude: ngIf.transclude,
    priority: ngIf.priority,
    terminal: ngIf.terminal,
    restrict: ngIf.restrict,
    link: function displayRightLinkFunction($scope, $element, $attr) {
      $attr.ngIf = function () {
        return Permissions.checkPresence($attr['displayRight']);
      };
      ngIf.link.apply(ngIf, arguments);
    }
  };
};

exports.default = displayRight;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _display_right = require('./display_right');

var _display_right2 = _interopRequireDefault(_display_right);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directives = angular.module('arkaan.frontend.directives', []).directive('displayRight', _display_right2.default).name;

exports.default = directives;

},{"./display_right":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adminDashboardController = function AdminDashboardController(Api) {
  'ngInject';

  _classCallCheck(this, AdminDashboardController);
};

exports.default = adminDashboardController;

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var adminDashboardRoute = function adminDashboardRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('adminDashboard', {
    url: '/admin',
    parent: 'admin',
    templateUrl: 'src/modules/admin/dashboard/admin_dashboard.html',
    controller: 'adminDashboardController as vm'
  });
};

exports.default = adminDashboardRoute;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _admin_dashboard_controller = require('./admin_dashboard_controller');

var _admin_dashboard_controller2 = _interopRequireDefault(_admin_dashboard_controller);

var _admin_dashboard_route = require('./admin_dashboard_route');

var _admin_dashboard_route2 = _interopRequireDefault(_admin_dashboard_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminDashboard = angular.module('arkaan.frontend.admin.dashboard', []).config(_admin_dashboard_route2.default).controller('adminDashboardController', _admin_dashboard_controller2.default).name;

exports.default = adminDashboard;

},{"./admin_dashboard_controller":16,"./admin_dashboard_route":17}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateLeftPanel = function updateLeftPanelFunction($mdSidenav, $rootScope, $scope, GroupsFactory) {
  'ngInject';

  var vm = this;

  vm.groupId = false;
  vm.correspondance = { 'rights': 'key', 'routes': 'slug'

  };$scope.$watch('vm.loopKey', function () {
    $rootScope.$on('update_' + vm.loopKey, function (event, groupId) {
      vm.groupId = groupId;
      GroupsFactory.get(groupId, vm.selectElements);
    });
  });

  vm.selectElements = function (group) {
    vm.collection = vm.collection.map(function (item) {
      item[vm.loopKey] = item[vm.loopKey].map(function (subitem) {
        subitem.selected = group[vm.loopKey].indexOf(subitem.id) >= 0;
        return subitem;
      });
      return item;
    });
    vm.toggle();
  };

  vm.update = function () {
    var elements = [];
    vm.collection.forEach(function (element) {
      element[vm.loopKey].forEach(function (item) {
        if (item.selected) elements.push(item.id);
      });
    });
    var methodName = vm.loopKey.charAt(0).toUpperCase() + vm.loopKey.slice(1);
    GroupsFactory['update' + methodName](vm.groupId, elements, vm.close);
  };

  vm.toggle = function () {
    $mdSidenav(vm.loopKey + '-panel').toggle();
  };

  vm.close = function () {
    $rootScope.$broadcast('refreshGroupsList');
    vm.toggle();
  };
};

exports.default = {
  templateUrl: 'src/modules/admin/groups/components/update_left_panel/update_left_panel.html',
  controller: updateLeftPanel,
  controllerAs: 'vm',
  bindings: {
    collection: '=',
    loopKey: '@',
    titleKey: '@'
  }
};

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var groupsFactory = function groupsFactoryFunction(Api) {
  'ngInject';

  var vm = this;

  vm.create = function (group, callback) {
    Api.post('/groups', group, { successCallback: callback });
  };

  vm.delete = function (group_id, callback) {
    Api.delete('/groups/' + group_id, { successCallback: callback });
  };

  vm.get = function (group_id, callback) {
    Api.get('/groups/' + group_id, {}, { successCallback: callback });
  };

  vm.list = function (callback) {
    Api.get('/groups', {}, { successCallback: callback });
  };

  vm.updateRights = function (group_id, rights, callback) {
    Api.patch('/groups/' + group_id + '/rights', { rights: rights }, { successCallback: callback });
  };

  vm.updateRoutes = function (group_id, routes, callback) {
    Api.patch('/groups/' + group_id + '/routes', { routes: routes }, { successCallback: callback });
  };

  return vm;
};

exports.default = groupsFactory;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var servicesFactory = function servicesFactoryFunction(Api) {
  'ngInject';

  var vm = this;

  vm.list = function (callback) {
    Api.get('/services', {}, { successCallback: callback });
  };

  return vm;
};

exports.default = servicesFactory;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var groupsRoute = function groupsRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('groups', {
    parent: 'admin',
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkAndRedirect();
      }
    }
  });

  $stateProvider.state('groups.index', {
    url: '/groups',
    templateUrl: 'src/modules/admin/groups/index/groups_list.html',
    controller: 'groupsListController as vm'
  });
};

exports.default = groupsRoute;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groups_list_controller = require('./index/groups_list_controller');

var _groups_list_controller2 = _interopRequireDefault(_groups_list_controller);

var _groups_factory = require('./factories/groups_factory.js');

var _groups_factory2 = _interopRequireDefault(_groups_factory);

var _services_factory = require('./factories/services_factory.js');

var _services_factory2 = _interopRequireDefault(_services_factory);

var _groups_route = require('./groups_route');

var _groups_route2 = _interopRequireDefault(_groups_route);

var _update_left_panel_component = require('./components/update_left_panel/update_left_panel_component');

var _update_left_panel_component2 = _interopRequireDefault(_update_left_panel_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groups = angular.module('arkaan.frontend.groups', []).controller('groupsListController', _groups_list_controller2.default).component('updateLeftPanel', _update_left_panel_component2.default).factory('GroupsFactory', _groups_factory2.default).factory('ServicesFactory', _services_factory2.default).config(_groups_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('groups');
}).name;

exports.default = groups;

},{"./components/update_left_panel/update_left_panel_component":19,"./factories/groups_factory.js":20,"./factories/services_factory.js":21,"./groups_route":22,"./index/groups_list_controller":24}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var updateGroupController = function updateGroupControllerFunction($mdSidenav, $rootScope, CategoriesFactory, GroupsFactory, ServicesFactory) {
  'ngInject';

  var vm = this;

  vm.groups = [];
  vm.group = { slug: ''
  };vm.services = [];
  vm.categories = [];
  vm.typeCorrespondance = { 'routes': 'services', 'rights': 'categories' };

  vm.createGroup = function () {
    GroupsFactory.create(vm.group, vm.getGroups);
  };

  vm.deleteGroup = function (group_id) {
    GroupsFactory.delete(group_id, vm.getGroups);
  };

  vm.editElements = function (type, group) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    $rootScope.$broadcast('update_' + type, group.id);
  };

  vm.getGroups = function () {
    GroupsFactory.list(vm.setGroups);
  };

  vm.setGroups = function (groups) {
    vm.groups = groups.items;
  };

  $rootScope.$on('refreshGroupsList', vm.getGroups);

  ServicesFactory.list(function (services) {
    vm.services = services.items;
  });
  CategoriesFactory.list(function (categories) {
    vm.categories = categories.items;
  });

  vm.getGroups();
};

exports.default = updateGroupController;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _groups = require('./groups');

var _groups2 = _interopRequireDefault(_groups);

var _rights = require('./rights');

var _rights2 = _interopRequireDefault(_rights);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminModulesList = [_dashboard2.default, _groups2.default, _rights2.default];

var adminModules = angular.module('arkaan.frontend.admin', adminModulesList).name;

exports.default = adminModules;

},{"./dashboard":18,"./groups":23,"./rights":28}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var categoriesFactory = function CategoriesFactory(Api) {
  var vm = this;

  vm.create = function (category, callback) {
    Api.post('/categories', category, { successCallback: callback });
  };

  vm.delete = function (category_id, callback) {
    Api.delete('/categories/' + category_id, { successCallback: callback });
  };

  vm.list = function (callback) {
    Api.get('/categories', {}, { successCallback: callback });
  };

  return vm;
};

exports.default = categoriesFactory;

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rightsFactory = function RightsFactory(Api) {
  var vm = this;

  vm.create = function (category_id, right_slug, callback) {
    Api.post('/rights', { category_id: category_id, slug: right_slug }, { successCallback: callback });
  };

  vm.delete = function (right_id, callback) {
    Api.delete('/rights/' + right_id, { successCallback: callback });
  };

  return vm;
};

exports.default = rightsFactory;

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rights_list_controller = require('./list/rights_list_controller');

var _rights_list_controller2 = _interopRequireDefault(_rights_list_controller);

var _rights_factory = require('./factories/rights_factory');

var _rights_factory2 = _interopRequireDefault(_rights_factory);

var _categories_factory = require('./factories/categories_factory');

var _categories_factory2 = _interopRequireDefault(_categories_factory);

var _rights_route = require('./rights_route');

var _rights_route2 = _interopRequireDefault(_rights_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rights = angular.module('arkaan.frontend.rights', []).controller('rightsListController', _rights_list_controller2.default).factory('RightsFactory', _rights_factory2.default).factory('CategoriesFactory', _categories_factory2.default).config(_rights_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('rights');
}).name;

exports.default = rights;

},{"./factories/categories_factory":26,"./factories/rights_factory":27,"./list/rights_list_controller":29,"./rights_route":30}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rightsListController = function rightsListControllerFunction($state, CategoriesFactory, RightsFactory) {
  'ngInject';

  var vm = this;

  vm.categories = [];
  vm.category = { slug: ''
  };vm.rights = {};

  vm.createCategory = function () {
    CategoriesFactory.create(vm.category, vm.getRights);
  };

  vm.createRight = function (category_id) {
    RightsFactory.create(category_id, vm.rights[category_id], vm.getRights);
  };

  vm.deleteCategory = function (category_id) {
    CategoriesFactory.delete(category_id, vm.getRights);
  };

  vm.deleteRight = function (right_id) {
    RightsFactory.delete(right_id, vm.getRights);
  };

  vm.getRights = function () {
    CategoriesFactory.list(vm.setCategories);
  };

  vm.setCategories = function (categories) {
    vm.category.slug = '';
    vm.categories = categories.items;
    vm.rights = {};
    vm.categories.forEach(function (item) {
      vm.rights[item.id] = '';
    });
  };

  vm.getRights();
};

exports.default = rightsListController;

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rightsRoute = function rightsRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('rights', {
    parent: 'admin',
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkAndRedirect();
      }
    }
  });

  $stateProvider.state('rightsList', {
    url: '/rights',
    parent: 'rights',
    templateUrl: 'src/modules/admin/rights/list/rights_list.html',
    controller: 'rightsListController as vm',
    resolve: {
      right: function right(Permissions) {
        'ngInject';

        Permissions.checkAndRedirect('administration.rights', 'adminDashboard');
      }
    }
  });
};

exports.default = rightsRoute;

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var accountsRoute = function accountsRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('accounts', {
    parent: 'app',
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkAndRedirect();
      }
    }
  });

  $stateProvider.state('accountsList', {
    url: '/accounts',
    parent: 'accounts',
    templateUrl: 'src/modules/app/accounts/list/accounts_list.html',
    controller: 'accountsListController as vm'
  });

  $stateProvider.state('accountsCreate', {
    url: '/accounts/new',
    templateUrl: 'src/modules/app/accounts/create/accounts_create.html',
    controller: 'accountsCreateController as vm',
    resolve: {
      authentication: function authentication(Authentication, $state) {
        'ngInject';

        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard');
      }
    }
  });
};

exports.default = accountsRoute;

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var accountsCreateController = function () {
  function AccountsCreateController(Api, $translate) {
    'ngInject';

    _classCallCheck(this, AccountsCreateController);

    this.account = {
      username: '',
      password: '',
      password_confirmation: '',
      email: '',
      lastname: '',
      firstname: '',
      birthdate: new Date(1970, 0, 0)
    };
    this.api = Api;
    this.confirmation = false;
    this.errors = false;
  }



  _createClass(AccountsCreateController, [{
    key: 'createAccount',
    value: function createAccount() {
      var me = this;
      this.api.post('/accounts', this.account, {
        successCallback: function successCallback() {
          return me.confirm();
        },
        errorCallback: function errorCallback(response) {
          return me.displayErrors(response);
        }
      });
    }


  }, {
    key: 'confirm',
    value: function confirm() {
      this.confirmation = true;
      this.errors = false;
    }


  }, {
    key: 'displayErrors',
    value: function displayErrors(response) {
      this.errors = response.errors;
      this.confirmation = false;
    }
  }]);

  return AccountsCreateController;
}();

exports.default = accountsCreateController;

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var accountsFactory = function accountsFactoryFunction(Api) {
  'ngInject';

  var vm = this;

  vm.get = function (account_id, callback) {
    Api.get('/accounts/' + account_id, {}, { successCallback: callback });
  };

  return vm;
};

exports.default = accountsFactory;

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accounts_list_controller = require('./list/accounts_list_controller');

var _accounts_list_controller2 = _interopRequireDefault(_accounts_list_controller);

var _accounts_create_controller = require('./create/accounts_create_controller');

var _accounts_create_controller2 = _interopRequireDefault(_accounts_create_controller);

var _accounts_factory = require('./factories/accounts_factory');

var _accounts_factory2 = _interopRequireDefault(_accounts_factory);

var _accounts_route = require('./accounts_route');

var _accounts_route2 = _interopRequireDefault(_accounts_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accounts = angular.module('arkaan.frontend.accounts', []).controller('accountsListController', _accounts_list_controller2.default).controller('accountsCreateController', _accounts_create_controller2.default).factory('AccountsFactory', _accounts_factory2.default).config(_accounts_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('accounts');
}).name;

exports.default = accounts;

},{"./accounts_route":31,"./create/accounts_create_controller":32,"./factories/accounts_factory":33,"./list/accounts_list_controller":35}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var accountsListController = function AccountsListController() {
  'ngInject';

  _classCallCheck(this, AccountsListController);

  this.accounts = ['babausse', 'babaussine'];
};

exports.default = accountsListController;

},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var campaignsRoute = function campaignsRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('campaigns', {
    parent: 'app',
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkAndRedirect();
      }
    }
  });

  $stateProvider.state('campaigns.index', {
    url: '/campaigns',
    templateUrl: 'src/modules/app/campaigns/index/campaigns_list.html',
    controller: 'campaignsListController as vm'
  });

  $stateProvider.state('campaigns.edit', {
    url: '/campaigns/{id}',
    templateUrl: 'src/modules/app/campaigns/edit/campaigns_edit.html',
    controller: 'campaignsEditController as vm'
  });
};

exports.default = campaignsRoute;

},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _edit = require('./modals/edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaignsComponents = angular.module('arkaan.frontend.campaigns.components', [_edit2.default]).name;

exports.default = campaignsComponents;

},{"./modals/edit":39}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var campaignsEditComponent = function campaignsEditComponent($localStorage, $mdDialog, $rootScope, campaignsFactory) {
  'ngInject';

  var vm = this;

  var dialogController = function dialogController($scope, $mdDialog) {
    $scope.campaign = {
      title: '',
      isPrivate: true,
      description: '',
      tags: [],
      creator_id: $localStorage.account.id
    };$scope.close = function () {
      return $mdDialog.cancel();
    };
    $scope.closeAndRefresh = function () {
      return $mdDialog.hide();
    };
    $scope.validate = function () {
      return campaignsFactory.create($scope.campaign, $scope.closeAndRefresh);
    };
  };

  vm.onCreation = function () {
    $rootScope.$broadcast('campaign.created');
  };

  vm.createCampaign = function (event) {
    $mdDialog.show({
      controller: dialogController,
      templateUrl: '/src/modules/app/campaigns/components/modals/edit/campaigns_edit_modal.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    }).then(vm.onCreation);
  };
};

exports.default = {
  controller: campaignsEditComponent,
  controllerAs: 'vm',
  templateUrl: '/src/modules/app/campaigns/components/modals/edit/campaigns_edit.html'
};

},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _campaigns_edit_component = require('./campaigns_edit_component.js');

var _campaigns_edit_component2 = _interopRequireDefault(_campaigns_edit_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaignsEditModal = angular.module('arkaan.frontend.campaigns.components.modals.edit', []).component('campaignsEdit', _campaigns_edit_component2.default).name;

exports.default = campaignsEditModal;

},{"./campaigns_edit_component.js":38}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var campaignsEditController = function campaignsEditControllerFunction($mdToast, $state, campaignsFactory) {
  'ngInject';

  var vm = this;

  vm.initialize = function () {
    campaignsFactory.get($state.params.id, function (campaign) {
      vm.campaign = campaign;
    });
  };

  vm.update = function () {
    var parameters = _.pick(vm.campaign, ['title', 'description', 'tags', 'is_private']);
    campaignsFactory.update($state.params.id, parameters, function () {
      var toast = $mdToast.simple().position('bottom right').textContent('Campagne mise à jour avec succès').hideDelay(2000);
      console.log(toast);
      $mdToast.show(toast);
      vm.initialize();
    });
  };

  vm.initialize();
};

exports.default = campaignsEditController;

},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var campaignsFactory = function campaignsFactoryFunction(Api) {
  'ngInject';

  var service = this;

  service.create = function (campaign, callback) {
    Api.post('/campaigns', campaign, { successCallback: callback });
  };

  service.delete = function (campaign_id, callback) {
    Api.delete('/campaigns/' + campaign_id, { successCallback: callback });
  };

  service.get = function (campaign_id, callback) {
    Api.get('/campaigns/' + campaign_id, {}, { successCallback: callback });
  };

  service.list = function (callback) {
    Api.get('/campaigns', {}, { successCallback: callback });
  };

  service.update = function (campaign_id, parameters, callback) {
    Api.put('/campaigns/' + campaign_id, parameters, { successCallback: callback });
  };

  return service;
};

exports.default = campaignsFactory;

},{}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _campaigns_list_controller = require('./index/campaigns_list_controller');

var _campaigns_list_controller2 = _interopRequireDefault(_campaigns_list_controller);

var _campaigns_edit_controller = require('./edit/campaigns_edit_controller');

var _campaigns_edit_controller2 = _interopRequireDefault(_campaigns_edit_controller);

var _campaigns_factory = require('./factories/campaigns_factory.js');

var _campaigns_factory2 = _interopRequireDefault(_campaigns_factory);

var _campaigns_route = require('./campaigns_route');

var _campaigns_route2 = _interopRequireDefault(_campaigns_route);

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaigns = angular.module('arkaan.frontend.campaigns', [_components2.default]).controller('campaignsListController', _campaigns_list_controller2.default).controller('campaignsEditController', _campaigns_edit_controller2.default).factory('campaignsFactory', _campaigns_factory2.default).config(_campaigns_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('campaigns');
}).name;

exports.default = campaigns;

},{"./campaigns_route":36,"./components":37,"./edit/campaigns_edit_controller":40,"./factories/campaigns_factory.js":41,"./index/campaigns_list_controller":43}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var campaignsListController = function campaignsListControllerFunction($mdDialog, $rootScope, campaignsFactory) {
  'ngInject';

  var vm = this;

  vm.getAllCampaigns = function () {
    campaignsFactory.list(function (campaigns) {
      vm.campaigns = campaigns;
    });
  };

  vm.deleteCampaign = function (campaign_id) {
    campaignsFactory.delete(campaign_id, vm.getAllCampaigns);
  };

  $rootScope.$on('campaign.created', vm.getAllCampaigns);

  vm.getAllCampaigns();
};

exports.default = campaignsListController;

},{}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dashboardController = function DashboardController(Api, $scope) {
  'ngInject';

  _classCallCheck(this, DashboardController);

  this.section = $scope.section;
};

exports.default = dashboardController;

},{}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dashboardRoute = function dashboardRoute($stateProvider) {
  'ngInject';


  $stateProvider.state('dashboard', {
    url: '/dashboard',
    parent: 'app',
    templateUrl: 'src/modules/app/dashboard/dashboard.html',
    controller: 'dashboardController as vm'
  });
};

exports.default = dashboardRoute;

},{}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dashboard_controller = require('./dashboard_controller');

var _dashboard_controller2 = _interopRequireDefault(_dashboard_controller);

var _dashboard_route = require('./dashboard_route');

var _dashboard_route2 = _interopRequireDefault(_dashboard_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboard = angular.module('arkaan.frontend.dashboard', []).config(_dashboard_route2.default).controller('dashboardController', _dashboard_controller2.default).name;

exports.default = dashboard;

},{"./dashboard_controller":44,"./dashboard_route":45}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accounts = require('./accounts');

var _accounts2 = _interopRequireDefault(_accounts);

var _campaigns = require('./campaigns');

var _campaigns2 = _interopRequireDefault(_campaigns);

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appModulesList = [_accounts2.default, _campaigns2.default, _dashboard2.default, _sessions2.default];

var appModules = angular.module('arkaan.frontend.app', appModulesList).name;

exports.default = appModules;

},{"./accounts":34,"./campaigns":42,"./dashboard":46,"./sessions":49}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sessionsCreateController = function () {
  function SessionsCreateController(Authentication) {
    'ngInject';

    _classCallCheck(this, SessionsCreateController);

    this.username = '';
    this.password = '';
    this.auth = Authentication;
  }



  _createClass(SessionsCreateController, [{
    key: 'authenticate',
    value: function authenticate() {
      this.auth.createUserSession(this.username, this.password);
    }
  }]);

  return SessionsCreateController;
}();

exports.default = sessionsCreateController;

},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sessions_create_controller = require('./create/sessions_create_controller');

var _sessions_create_controller2 = _interopRequireDefault(_sessions_create_controller);

var _sessions_route = require('././sessions_route');

var _sessions_route2 = _interopRequireDefault(_sessions_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = angular.module('arkaan.frontend.sessions', []).controller('sessionsCreateController', _sessions_create_controller2.default).config(_sessions_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('sessions');
}).name;

exports.default = login;

},{"././sessions_route":50,"./create/sessions_create_controller":48}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginRoute = function loginRoute($stateProvider) {
  $stateProvider.state('sessionsCreate', {
    url: '/sessions/new',
    parent: 'app',
    templateUrl: 'src/modules/app/sessions/create/sessions_create.html',
    controller: 'sessionsCreateController as vm',
    resolve: {
      authentication: function authentication(Authentication, $state) {
        'ngInject';

        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard');
      }
    }
  });
};

exports.default = loginRoute;

},{}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _admin = require('./admin');

var _admin2 = _interopRequireDefault(_admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modulesList = [_app2.default, _admin2.default];

var modules = angular.module('arkaan.frontend.modules', modulesList).name;

exports.default = modules;

},{"./admin":25,"./app":47}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {

  function ApiClass($http, $localStorage, $window) {
    'ngInject';

    _classCallCheck(this, ApiClass);

    this.http = $http;
    this.jquery = $window.jQuery;
    this.storage = $localStorage;
  }



  _createClass(ApiClass, [{
    key: 'post',
    value: function post(uri) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.makeRequest('POST', uri, parameters, options);
    }


  }, {
    key: 'get',
    value: function get(uri) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.makeRequest('GET', uri, parameters, options);
    }


  }, {
    key: 'patch',
    value: function patch(uri) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.makeRequest('PATCH', uri, parameters, options);
    }


  }, {
    key: 'put',
    value: function put(uri) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.makeRequest('PUT', uri, parameters, options);
    }


  }, {
    key: 'delete',
    value: function _delete(uri) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.makeRequest('DELETE', uri, {}, options);
    }


  }, {
    key: 'makeRequest',
    value: function makeRequest(verb, uri, parameters, options) {
      var configuration = {
        method: 'POST',
        url: '/api',
        headers: {
          X_CSRF_TOKEN: this.jquery('input[name=_csrf]').val()
        },
        data: angular.extend({}, parameters, { url: uri, method: verb })
      };
      if (options.skipSessionId != true) {
        configuration.data.session_id = this.storage.token;
      }
      var successCallback = function successCallback(response) {
        if (options.successCallback) options.successCallback(response.data);
      };
      var errorCallback = function errorCallback(response) {
        if (options.errorCallback) options.errorCallback(response.data);
      };
      return this.http(configuration).then(successCallback, errorCallback);
    }
  }]);

  return ApiClass;
}();

exports.default = Api;

},{}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authentication = require('./permissions/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _permissions = require('./permissions/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _api = require('./api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = angular.module('arkaan.frontend.services', []).service('Authentication', _authentication2.default).service('Permissions', _permissions2.default).service('Api', _api2.default).name;

exports.default = services;

},{"./api/api":52,"./permissions/authentication":54,"./permissions/permissions":55}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = function () {
  function AuthenticationClass(Api, AccountsFactory, $localStorage, $rootScope, $state) {
    'ngInject';

    _classCallCheck(this, AuthenticationClass);

    this.storage = $localStorage;
    this.api = Api;
    this.accounts = AccountsFactory;
    this.state = $state;
    this.scope = $rootScope;
  }



  _createClass(AuthenticationClass, [{
    key: 'checkAndRedirect',
    value: function checkAndRedirect() {
      return this.checkSessionKeysPresence() && this.checkForInvalidSession();
    }


  }, {
    key: 'checkSessionKeysPresence',
    value: function checkSessionKeysPresence() {
      var redirectIfError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var hasBothKeys = !!this.storage.account && !!this.storage.token;
      if (!hasBothKeys && redirectIfError) this.destroyUserSession();
      return hasBothKeys;
    }


  }, {
    key: 'checkForInvalidSession',
    value: function checkForInvalidSession() {
      this.api.get('/sessions/' + this.storage.token, {
        successCallback: this.checkForHijackedSession,
        errorCallback: this.destroyUserSession
      });
    }


  }, {
    key: 'checkForHijackedSession',
    value: function checkForHijackedSession(response) {
      if (response.username != this.storage.account.username) this.destroyUserSession();
    }


  }, {
    key: 'createUserSession',
    value: function createUserSession(username, password) {
      var me = this;
      var successCallback = function successCallback(session_response) {
        me.storage.token = session_response.token;
        me.accounts.get(session_response.account_id, function (account_response) {
          me.storage.account = account_response.account;
          me.scope.$broadcast('loginSuccessful');
          me.state.go('dashboard', {}, { reload: true });
        });
      };
      this.api.post('/sessions', { username: username, password: password }, { successCallback: successCallback, skipSessionId: true });
    }


  }, {
    key: 'destroyUserSession',
    value: function destroyUserSession() {
      delete this.storage.account;
      delete this.storage.token;
      this.state.go('sessionsCreate');
    }
  }]);

  return AuthenticationClass;
}();

exports.default = Authentication;

},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Permissions = function () {
  function PermissionsClass($localStorage, $state) {
    _classCallCheck(this, PermissionsClass);

    this.account = $localStorage.account;
    this.state = $state;
  }



  _createClass(PermissionsClass, [{
    key: "checkAndRedirect",
    value: function checkAndRedirect(right_name, redirect_state) {
      if (!this.checkPresence(right_name)) this.state.go(redirect_state);
    }
  }, {
    key: "checkPresence",
    value: function checkPresence(right_name) {
      var hasRight = false;
      this.account.rights.forEach(function (right) {
        if (right.slug == right_name) hasRight = true;
      });
      return hasRight;
    }
  }]);

  return PermissionsClass;
}();

exports.default = Permissions;

},{}]},{},[1])
