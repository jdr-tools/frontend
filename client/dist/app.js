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

angular.module('arkaan.frontend', ['ui.router', 'ngStorage', _components2.default, _configuration2.default, _modules2.default, _services2.default]);

},{"./components":2,"./configuration":5,"./modules":13,"./services":19}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main_menu = require('./main_menu');

var _main_menu2 = _interopRequireDefault(_main_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentsList = [_main_menu2.default];

var components = angular.module('arkaan.frontend.components', componentsList).name;

exports.default = components;

},{"./main_menu":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main_menu_component = require('./main_menu_component');

var _main_menu_component2 = _interopRequireDefault(_main_menu_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainMenu = angular.module('arkaan.frontend.components.main_menu', []).component('mainMenu', _main_menu_component2.default).name;

exports.default = mainMenu;

},{"./main_menu_component":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainMenuController = function MainMenu(Authentication, $localStorage) {
  'ngInject';

  _classCallCheck(this, MainMenu);

  this.authenticated = Authentication.checkUserSession($localStorage.username, $localStorage.token);
};

var mainMenuComponent = {
  controller: mainMenuController,
  controllerAs: 'vm',
  templateUrl: '/src/components/main_menu/main_menu.html'
};

exports.default = mainMenuComponent;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url_router_provider = require('./url_router_provider');

var _url_router_provider2 = _interopRequireDefault(_url_router_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = angular.module('arkaan.frontend.configuration', []).config(_url_router_provider2.default).name;

exports.default = configuration;

},{"./url_router_provider":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configUrlRouterProvider = function configUrlRouterProviderFunction($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/dashboard');
};

exports.default = configUrlRouterProvider;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var accountsController = function AccountsController() {
  'ngInject';

  _classCallCheck(this, AccountsController);

  this.accounts = ['babausse', 'babaussine'];
};

exports.default = accountsController;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var accountsRoute = function accountsRoute($stateProvider) {
  $stateProvider.state('accounts', {
    url: '/accounts',
    views: {
      'main@': {
        templateUrl: 'src/modules/accounts/template.html',
        controller: 'accountsController as vm'
      }
    },
    resolve: {
      authentication: function authentication(Authentication) {
        'ngInject';

        Authentication.checkUserSession();
      }
    }
  });
};

exports.default = accountsRoute;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _accounts_controller = require('./accounts_controller');

var _accounts_controller2 = _interopRequireDefault(_accounts_controller);

var _accounts_route = require('./accounts_route');

var _accounts_route2 = _interopRequireDefault(_accounts_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accounts = angular.module('arkaan.frontend.accounts', []).config(_accounts_route2.default).controller('accountsController', _accounts_controller2.default).name;

exports.default = accounts;

},{"./accounts_controller":7,"./accounts_route":8}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dashboardController = function DashboardController(Api) {
  'ngInject';

  _classCallCheck(this, DashboardController);

  this.dashboardMessage = Api.post('url', {}, {});
};

exports.default = dashboardController;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dashboardRoute = function dashboardRoute($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      'main@': {
        templateUrl: 'src/modules/dashboard/template.html',
        controller: 'dashboardController as vm'
      }
    }
  });
};

exports.default = dashboardRoute;

},{}],12:[function(require,module,exports){
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

},{"./dashboard_controller":10,"./dashboard_route":11}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dashboard = require('./dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _accounts = require('./accounts');

var _accounts2 = _interopRequireDefault(_accounts);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modulesList = [_dashboard2.default, _accounts2.default, _login2.default];

var modules = angular.module('arkaan.frontend.modules', modulesList).name;

exports.default = modules;

},{"./accounts":9,"./dashboard":12,"./login":14}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login_controller = require('./login_controller');

var _login_controller2 = _interopRequireDefault(_login_controller);

var _login_route = require('./login_route');

var _login_route2 = _interopRequireDefault(_login_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = angular.module('arkaan.frontend.login', []).config(_login_route2.default).controller('loginController', _login_controller2.default).name;

exports.default = login;

},{"./login_controller":15,"./login_route":16}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loginController = function () {
  function LoginController(Authentication) {
    'ngInject';

    _classCallCheck(this, LoginController);

    this.username = '';
    this.password = '';
    this.auth = Authentication;
  }

  _createClass(LoginController, [{
    key: 'authenticate',
    value: function authenticate() {
      this.auth.createUserSession(this.username, this.password);
    }
  }]);

  return LoginController;
}();

exports.default = loginController;

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var loginRoute = function loginRoute($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      'main@': {
        templateUrl: 'src/modules/login/template.html',
        controller: 'loginController as vm'
      }
    }
  });
};

exports.default = loginRoute;

},{}],17:[function(require,module,exports){
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
    value: function post(uri, parameters, options) {
      this.makeRequest('POST', uri, parameters, options);
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
        if (options.successCallback) options.successCallback(response);
      };
      var errorCallback = function errorCallback(response) {
        if (options.errorCallback) options.errorCallback(response);
      };
      return this.http(configuration).then(successCallback, errorCallback);
    }
  }]);

  return ApiClass;
}();

exports.default = Api;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = function () {
  function AuthenticationClass($localStorage, Api, $state) {
    'ngInject';

    _classCallCheck(this, AuthenticationClass);

    this.storage = $localStorage;
    this.api = Api;
    this.state = $state;
  }



  _createClass(AuthenticationClass, [{
    key: 'checkUserSession',
    value: function checkUserSession() {
      return this.checkSessionKeysPresence() && this.checkForInvalidSession();
    }


  }, {
    key: 'checkSessionKeysPresence',
    value: function checkSessionKeysPresence() {
      if (!this.storage.username || !this.storage.token) {
        this.destroyUserSession();
        return false;
      }
      return true;
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

},{}],19:[function(require,module,exports){
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

},{"./api/api":17,"./authentication/authentication":18}]},{},[1])
