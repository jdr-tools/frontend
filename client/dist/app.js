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

angular.module('arkaan.frontend', ['ngStorage', 'pascalprecht.translate', 'ui.router', _components2.default, _configuration2.default, _modules2.default, _services2.default]);

},{"./components":4,"./configuration":7,"./modules":17,"./services":23}],2:[function(require,module,exports){
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

var _main_menu = require('./main_menu');

var _main_menu2 = _interopRequireDefault(_main_menu);

var _custom_footer = require('./custom_footer');

var _custom_footer2 = _interopRequireDefault(_custom_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsList = [_main_menu2.default, _custom_footer2.default];

var components = angular.module('arkaan.frontend.components', componentsList).name;

exports.default = components;

},{"./custom_footer":3,"./main_menu":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main_menu_component = require('./main_menu_component');

var _main_menu_component2 = _interopRequireDefault(_main_menu_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainMenu = angular.module('arkaan.frontend.components.main_menu', []).component('mainMenu', _main_menu_component2.default).name;

exports.default = mainMenu;

},{"./main_menu_component":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainMenuController = function () {
  function MainMenu(Authentication, $rootScope, $translatePartialLoader) {
    'ngInject';

    _classCallCheck(this, MainMenu);

    this.auth = Authentication;
    this.authenticated = Authentication.checkSessionKeysPresence(false);

    var me = this;
    $rootScope.$on('loginSuccessful', function () {
      me.authenticated = true;
    });
  }



  _createClass(MainMenu, [{
    key: 'logout',
    value: function logout() {
      this.auth.destroyUserSession();
      this.authenticated = false;
    }
  }]);

  return MainMenu;
}();

var mainMenuComponent = {
  controller: mainMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/main_menu/main_menu.html'
};

exports.default = mainMenuComponent;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url_router_provider = require('./url_router_provider');

var _url_router_provider2 = _interopRequireDefault(_url_router_provider);

var _translate_provider = require('./translate_provider');

var _translate_provider2 = _interopRequireDefault(_translate_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = angular.module('arkaan.frontend.configuration', []).config(_url_router_provider2.default).config(_translate_provider2.default).name;

exports.default = configuration;

},{"./translate_provider":8,"./url_router_provider":9}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configUrlRouterProvider = function configUrlRouterProviderFunction($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/dashboard');
};

exports.default = configUrlRouterProvider;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var accountsRoute = function accountsRoute($stateProvider) {
  'ngInject';

  var addTranslation = function addTranslation($translatePartialLoader) {
    'ngInject';

    $translatePartialLoader.addPart('accounts');
  };

  $stateProvider.state({
    name: 'accounts',
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkAndRedirect();
      },
      translate: addTranslation
    }
  });

  $stateProvider.state({
    name: 'accountsList',
    url: '/accounts',
    parent: 'accounts',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/list/accounts_list.html',
        controller: 'accountsListController as vm'
      }
    }
  });

  $stateProvider.state({
    name: 'accountsCreate',
    url: '/accounts/new',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/create/accounts_create.html',
        controller: 'accountsCreateController as vm'
      }
    },
    resolve: {
      authentication: function authentication(Authentication, $state) {
        'ngInject';

        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard');
      },
      translate: addTranslation
    }
  });
};

exports.default = accountsRoute;

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./accounts_route":10,"./create/accounts_create_controller":11,"./list/accounts_list_controller":13}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dashboardController = function DashboardController(Api) {
  'ngInject';

  _classCallCheck(this, DashboardController);
};

exports.default = dashboardController;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dashboardRoute = function dashboardRoute($stateProvider) {
  'ngInject';


  $stateProvider.state({
    name: 'dashboard',
    url: '/dashboard',
    views: {
      'main@': {
        templateUrl: 'src/modules/dashboard/dashboard.html',
        controller: 'dashboardController as vm'
      }
    }
  });
};

exports.default = dashboardRoute;

},{}],16:[function(require,module,exports){
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

},{"./dashboard_controller":14,"./dashboard_route":15}],17:[function(require,module,exports){
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

var modulesList = [_dashboard2.default, _accounts2.default, _sessions2.default];

var modules = angular.module('arkaan.frontend.modules', modulesList).name;

exports.default = modules;

},{"./accounts":12,"./dashboard":16,"./sessions":19}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"././sessions_route":20,"./create/sessions_create_controller":18}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginRoute = function loginRoute($stateProvider) {
  $stateProvider.state({
    name: 'sessionsCreate',
    url: '/sessions/new',
    views: {
      'main@': {
        templateUrl: 'src/modules/sessions/create/sessions_create.html',
        controller: 'sessionsCreateController as vm'
      }
    },
    resolve: {
      authentication: function authentication(Authentication, $state) {
        'ngInject';

        if (Authentication.checkSessionKeysPresence(false)) $state.go('dashboard');
      }
    }
  });
};

exports.default = loginRoute;

},{}],21:[function(require,module,exports){
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
    key: 'makeRequest',
    value: function makeRequest(verb, uri, parameters, options) {
      var configuration = {
        method: verb,
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

},{}],22:[function(require,module,exports){
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

      var hasBothKeys = !!this.storage.username && !!this.storage.token;
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
      if (response.username != this.storage.username) this.destroyUserSession();
    }


  }, {
    key: 'createUserSession',
    value: function createUserSession(username, password) {
      var me = this;
      var successCallback = function successCallback(response) {
        me.storage.username = username;
        me.storage.token = response.token;
        me.scope.$broadcast('loginSuccessful');
        me.state.go('dashboard', {}, { reload: true });
      };
      this.api.post('/sessions', { username: username, password: password }, { successCallback: successCallback });
    }


  }, {
    key: 'destroyUserSession',
    value: function destroyUserSession() {
      delete this.storage.username;
      delete this.storage.token;
      this.state.go('login');
    }
  }]);

  return AuthenticationClass;
}();

exports.default = Authentication;

},{}],23:[function(require,module,exports){
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

},{"./api/api":21,"./authentication/authentication":22}]},{},[1])
