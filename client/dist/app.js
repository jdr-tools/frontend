(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _modules = require('./modules');

var _modules2 = _interopRequireDefault(_modules);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('arkaan.frontend', ['ngStorage', 'ngMaterial', 'pascalprecht.translate', 'ui.router', _components2.default, _configuration2.default, _modules2.default, _services2.default]);

},{"./components":4,"./configuration":10,"./modules":34,"./services":37}],2:[function(require,module,exports){
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adminDashboardController = function AdminDashboardController(Api) {
  'ngInject';

  _classCallCheck(this, AdminDashboardController);
};

exports.default = adminDashboardController;

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{"./admin_dashboard_controller":14,"./admin_dashboard_route":15}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rights = require('./rights');

var _rights2 = _interopRequireDefault(_rights);

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminModulesList = [_dashboard2.default, _rights2.default];

var adminModules = angular.module('arkaan.frontend.admin', adminModulesList).name;

exports.default = adminModules;

},{"./dashboard":16,"./rights":20}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var categoriesFactory = function CategoriesFactory(Api) {
  var vm = this;

  vm.create = function (category, callback) {
    Api.post('/rights/categories', category, { successCallback: callback });
  };

  vm.delete = function (category_id, callback) {
    Api.delete('/rights/categories/' + category_id, { successCallback: callback });
  };

  return vm;
};

exports.default = categoriesFactory;

},{}],19:[function(require,module,exports){
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

  vm.list = function (callback) {
    Api.get('/rights', {}, { successCallback: callback });
  };

  return vm;
};

exports.default = rightsFactory;

},{}],20:[function(require,module,exports){
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

},{"./factories/categories_factory":18,"./factories/rights_factory":19,"./list/rights_list_controller":21,"./rights_route":22}],21:[function(require,module,exports){
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
    RightsFactory.list(vm.setCategories);
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

},{}],22:[function(require,module,exports){
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
      },
      translation: function translation($translatePartialLoader) {
        $translatePartialLoader.addPart('rights');
      }
    }
  });

  $stateProvider.state('rightsList', {
    url: '/rights',
    parent: 'rights',
    templateUrl: 'src/modules/admin/rights/list/rights_list.html',
    controller: 'rightsListController as vm'
  });
};

exports.default = rightsRoute;

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accounts_list_controller = require('./list/accounts_list_controller');

var _accounts_list_controller2 = _interopRequireDefault(_accounts_list_controller);

var _accounts_create_controller = require('./create/accounts_create_controller');

var _accounts_create_controller2 = _interopRequireDefault(_accounts_create_controller);

var _accounts_route = require('./accounts_route');

var _accounts_route2 = _interopRequireDefault(_accounts_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accounts = angular.module('arkaan.frontend.accounts', []).controller('accountsListController', _accounts_list_controller2.default).controller('accountsCreateController', _accounts_create_controller2.default).config(_accounts_route2.default).run(function ($translatePartialLoader) {
  return $translatePartialLoader.addPart('accounts');
}).name;

exports.default = accounts;

},{"./accounts_route":23,"./create/accounts_create_controller":24,"./list/accounts_list_controller":26}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"./dashboard_controller":27,"./dashboard_route":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _accounts = require('./accounts');

var _accounts2 = _interopRequireDefault(_accounts);

var _sessions = require('./sessions');

var _sessions2 = _interopRequireDefault(_sessions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appModulesList = [_dashboard2.default, _accounts2.default, _sessions2.default];

var appModules = angular.module('arkaan.frontend.app', appModulesList).name;

exports.default = appModules;

},{"./accounts":25,"./dashboard":29,"./sessions":32}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"././sessions_route":33,"./create/sessions_create_controller":31}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{"./admin":17,"./app":30}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {

  function ApiClass($http, $window) {
    'ngInject';

    _classCallCheck(this, ApiClass);

    this.http = $http;
    this.jquery = $window.jQuery;
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

},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = function () {
  function AuthenticationClass(Api, $localStorage, $rootScope, $state) {
    'ngInject';

    _classCallCheck(this, AuthenticationClass);

    this.storage = $localStorage;
    this.api = Api;
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
      var successCallback = function successCallback(response) {
        me.storage.account = response.account;
        me.storage.token = response.token;
        me.scope.$broadcast('loginSuccessful');
        me.state.go('dashboard', {}, { reload: true });
      };
      this.api.post('/sessions', { username: username, password: password }, { successCallback: successCallback });
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

},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authentication = require('./authentication/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _api = require('./api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = angular.module('arkaan.frontend.services', []).service('Authentication', _authentication2.default).service('Api', _api2.default).name;

exports.default = services;

},{"./api/api":35,"./authentication/authentication":36}]},{},[1])
