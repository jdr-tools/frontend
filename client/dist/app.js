(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dashboard = require('./modules/dashboard/');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _accounts = require('./modules/accounts/');

var _accounts2 = _interopRequireDefault(_accounts);

var _login = require('./modules/login/');

var _login2 = _interopRequireDefault(_login);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('arkaan.frontend', ['ui.router', _dashboard2.default, _accounts2.default, _login2.default, _services2.default, _configuration2.default]);

},{"./configuration":2,"./modules/accounts/":6,"./modules/dashboard/":9,"./modules/login/":10,"./services":15}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url_router_provider = require('./url_router_provider');

var _url_router_provider2 = _interopRequireDefault(_url_router_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configuration = angular.module('arkaan.configuration', []).config(_url_router_provider2.default).name;

exports.default = configuration;

},{"./url_router_provider":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This function configures the router to redirect automatically to /dashboard when the user arrives on the /
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
var configUrlRouterProvider = function configUrlRouterProviderFunction($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/dashboard');
};

exports.default = configUrlRouterProvider;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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
    }
  });
};

exports.default = accountsRoute;

},{}],6:[function(require,module,exports){
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

},{"./accounts_controller":4,"./accounts_route":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./dashboard_controller":7,"./dashboard_route":8}],10:[function(require,module,exports){
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

},{"./login_controller":11,"./login_route":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Controller for the login screen.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
var loginController = function LoginController() {
  'ngInject';

  _classCallCheck(this, LoginController);

  this.username = '';
  this.password = '';
};

exports.default = loginController;

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class is made to query the server side of the application to forward API calls.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
var Api = function () {

  /**
   * Constructor of the class, initializing needed variables
   * @param {Object} $http - the HTTP requests maker service used to query the API server-side.
   */
  function ApiClass($http) {
    'ngInject';

    _classCallCheck(this, ApiClass);

    this.http = $http;
  }

  /**
   * Makes a post request on the server-side part of the application, forwarded afterward on the gateway, and the service.
   * @param {String} url - the URL of the route you're trying to reach in the API.
   * @param {Object} parameters - the parameters you want to pass as a body to the route.
   * @param {Object} options - the options to pass to the service to change its default behaviour.
   */


  _createClass(ApiClass, [{
    key: 'post',
    value: function post(url, parameters, options) {
      return 'Je compte faire une requête en post pour vérifier un truc sur l\'API';
    }
  }]);

  return ApiClass;
}();

exports.default = Api;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = function () {
  function AuthenticationClass() {
    _classCallCheck(this, AuthenticationClass);
  }

  _createClass(AuthenticationClass, [{
    key: 'checkUserSession',
    value: function checkUserSession(username, token) {
      console.log('Essai de service');
    }
  }]);

  return AuthenticationClass;
}();

exports.default = Authentication;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authentication = require('./authentication/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _api = require('./api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = angular.module('arkaan.services', []).service('Authentication', _authentication2.default).service('Api', _api2.default).name;

exports.default = services;

},{"./api/api":13,"./authentication/authentication":14}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbmZpZ3VyYXRpb24vaW5kZXguanMiLCJzcmMvY29uZmlndXJhdGlvbi91cmxfcm91dGVyX3Byb3ZpZGVyLmpzIiwic3JjL21vZHVsZXMvYWNjb3VudHMvYWNjb3VudHNfY29udHJvbGxlci5qcyIsInNyYy9tb2R1bGVzL2FjY291bnRzL2FjY291bnRzX3JvdXRlLmpzIiwic3JjL21vZHVsZXMvYWNjb3VudHMvaW5kZXguanMiLCJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkX2NvbnRyb2xsZXIuanMiLCJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkX3JvdXRlLmpzIiwic3JjL21vZHVsZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwic3JjL21vZHVsZXMvbG9naW4vaW5kZXguanMiLCJzcmMvbW9kdWxlcy9sb2dpbi9sb2dpbl9jb250cm9sbGVyLmpzIiwic3JjL21vZHVsZXMvbG9naW4vbG9naW5fcm91dGUuanMiLCJzcmMvc2VydmljZXMvYXBpL2FwaS5qcyIsInNyYy9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5qcyIsInNyYy9zZXJ2aWNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsUUFBUSxNQUFSLENBQWUsaUJBQWYsRUFBa0MsQ0FBQyxXQUFELHdHQUFsQzs7Ozs7Ozs7O0FDTkE7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLFFBQVEsTUFBUixDQUFlLHNCQUFmLEVBQXVDLEVBQXZDLEVBQ25CLE1BRG1CLGdDQUVuQixJQUZIOztrQkFJZSxhOzs7Ozs7OztBQ05mOzs7O0FBSUEsSUFBTSwwQkFBMEIsU0FBUywrQkFBVCxDQUEwQyxrQkFBMUMsRUFBOEQ7QUFDNUY7O0FBQ0EscUJBQW1CLFNBQW5CLENBQTZCLFlBQTdCO0FBQ0QsQ0FIRDs7a0JBS2UsdUI7Ozs7Ozs7Ozs7O0FDVGYsSUFBTSxxQkFDSiw4QkFBYztBQUNaOztBQURZOztBQUVaLE9BQUssUUFBTCxHQUFnQixDQUFDLFVBQUQsRUFBYSxZQUFiLENBQWhCO0FBQ0QsQ0FKSDs7a0JBT2Usa0I7Ozs7Ozs7O0FDUGYsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBVSxjQUFWLEVBQTBCO0FBQzlDLGlCQUFlLEtBQWYsQ0FBcUIsVUFBckIsRUFBaUM7QUFDL0IsU0FBSyxXQUQwQjtBQUUvQixXQUFPO0FBQ0wsZUFBUztBQUNQLHFCQUFhLG9DQUROO0FBRVAsb0JBQVk7QUFGTDtBQURKO0FBRndCLEdBQWpDO0FBU0QsQ0FWRDs7a0JBWWUsYTs7Ozs7Ozs7O0FDWmY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLFFBQVEsTUFBUixDQUFlLDBCQUFmLEVBQTJDLEVBQTNDLEVBQ2QsTUFEYywyQkFFZCxVQUZjLENBRUgsb0JBRkcsaUNBR2QsSUFISDs7a0JBS2UsUTs7Ozs7Ozs7Ozs7QUNSZixJQUFNLHNCQUNKLDZCQUFZLEdBQVosRUFBaUI7QUFDZjs7QUFEZTs7QUFFZixPQUFLLGdCQUFMLEdBQXdCLElBQUksSUFBSixDQUFTLEtBQVQsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FBeEI7QUFDRCxDQUpIOztrQkFPZSxtQjs7Ozs7Ozs7QUNQZixJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFVLGNBQVYsRUFBMEI7QUFDL0MsaUJBQWUsS0FBZixDQUFxQixXQUFyQixFQUFrQztBQUNoQyxTQUFLLFlBRDJCO0FBRWhDLFdBQU87QUFDTCxlQUFTO0FBQ1AscUJBQWEscUNBRE47QUFFUCxvQkFBWTtBQUZMO0FBREo7QUFGeUIsR0FBbEM7QUFTRCxDQVZEOztrQkFZZSxjOzs7Ozs7Ozs7QUNaZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFlBQVksUUFBUSxNQUFSLENBQWUsMkJBQWYsRUFBNEMsRUFBNUMsRUFDZixNQURlLDRCQUVmLFVBRmUsQ0FFSixxQkFGSSxrQ0FHZixJQUhIOztrQkFLZSxTOzs7Ozs7Ozs7QUNSZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFFBQVEsUUFBUSxNQUFSLENBQWUsdUJBQWYsRUFBd0MsRUFBeEMsRUFDWCxNQURXLHdCQUVYLFVBRlcsQ0FFQSxpQkFGQSw4QkFHWCxJQUhIOztrQkFLZSxLOzs7Ozs7Ozs7OztBQ1JmOzs7O0FBSUEsSUFBTSxrQkFDSiwyQkFBYztBQUNaOztBQURZOztBQUVaLE9BQUssUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUssUUFBTCxHQUFnQixFQUFoQjtBQUNELENBTEg7O2tCQVNlLGU7Ozs7Ozs7O0FDYmYsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFVLGNBQVYsRUFBMEI7QUFDM0MsaUJBQWUsS0FBZixDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFLLFFBRHVCO0FBRTVCLFdBQU87QUFDTCxlQUFTO0FBQ1AscUJBQWEsaUNBRE47QUFFUCxvQkFBWTtBQUZMO0FBREo7QUFGcUIsR0FBOUI7QUFTRCxDQVZEOztrQkFZZSxVOzs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7QUFJQSxJQUFNOztBQUVKOzs7O0FBSUEsb0JBQWEsS0FBYixFQUFvQjtBQUNsQjs7QUFEa0I7O0FBRWxCLFNBQUssSUFBTCxHQUFZLEtBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7QUFYSTtBQUFBO0FBQUEseUJBaUJFLEdBakJGLEVBaUJPLFVBakJQLEVBaUJtQixPQWpCbkIsRUFpQjRCO0FBQzlCLGFBQU8sc0VBQVA7QUFDRDtBQW5CRzs7QUFBQTtBQUFBLEdBQU47O2tCQXNCZSxHOzs7Ozs7Ozs7Ozs7O0FDMUJmLElBQU07QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFDQUNjLFFBRGQsRUFDd0IsS0FEeEIsRUFDK0I7QUFDakMsY0FBUSxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUhHOztBQUFBO0FBQUEsR0FBTjs7a0JBTWUsYzs7Ozs7Ozs7O0FDTmY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxXQUFXLFFBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLEVBQWxDLEVBQ2QsT0FEYyxDQUNOLGdCQURNLDRCQUVkLE9BRmMsQ0FFTixLQUZNLGlCQUdkLElBSEg7O2tCQUtlLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IGRhc2hib2FyZCBmcm9tICcuL21vZHVsZXMvZGFzaGJvYXJkLydcbmltcG9ydCBhY2NvdW50cyBmcm9tICcuL21vZHVsZXMvYWNjb3VudHMvJ1xuaW1wb3J0IGxvZ2luIGZyb20gJy4vbW9kdWxlcy9sb2dpbi8nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcydcbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdGlvbidcblxuYW5ndWxhci5tb2R1bGUoJ2Fya2Fhbi5mcm9udGVuZCcsIFsndWkucm91dGVyJywgZGFzaGJvYXJkLCBhY2NvdW50cywgbG9naW4sIHNlcnZpY2VzLCBjb25maWd1cmF0aW9uXSkiLCJpbXBvcnQgY29uZmlnVXJsUm91dGVyUHJvdmlkZXIgZnJvbSAnLi91cmxfcm91dGVyX3Byb3ZpZGVyJ1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gYW5ndWxhci5tb2R1bGUoJ2Fya2Fhbi5jb25maWd1cmF0aW9uJywgW10pXG4gIC5jb25maWcoY29uZmlnVXJsUm91dGVyUHJvdmlkZXIpXG4gIC5uYW1lXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBjb25maWd1cmVzIHRoZSByb3V0ZXIgdG8gcmVkaXJlY3QgYXV0b21hdGljYWxseSB0byAvZGFzaGJvYXJkIHdoZW4gdGhlIHVzZXIgYXJyaXZlcyBvbiB0aGUgL1xuICogQGF1dGhvciBWaW5jZW50IENvdXJ0b2lzIDxjb3VydG9pcy52aW5jZW50QG91dGxvb2suY29tPlxuICovXG5jb25zdCBjb25maWdVcmxSb3V0ZXJQcm92aWRlciA9IGZ1bmN0aW9uIGNvbmZpZ1VybFJvdXRlclByb3ZpZGVyRnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9kYXNoYm9hcmQnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWdVcmxSb3V0ZXJQcm92aWRlclxuIiwiY29uc3QgYWNjb3VudHNDb250cm9sbGVyID0gY2xhc3MgQWNjb3VudHNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJ25nSW5qZWN0J1xuICAgIHRoaXMuYWNjb3VudHMgPSBbJ2JhYmF1c3NlJywgJ2JhYmF1c3NpbmUnXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzQ29udHJvbGxlciIsImNvbnN0IGFjY291bnRzUm91dGUgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2FjY291bnRzJywge1xuICAgIHVybDogJy9hY2NvdW50cycsXG4gICAgdmlld3M6IHtcbiAgICAgICdtYWluQCc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvbW9kdWxlcy9hY2NvdW50cy90ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2FjY291bnRzQ29udHJvbGxlciBhcyB2bSdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzUm91dGUiLCJpbXBvcnQgYWNjb3VudHNDb250cm9sbGVyIGZyb20gJy4vYWNjb3VudHNfY29udHJvbGxlcidcbmltcG9ydCBhY2NvdW50c1JvdXRlIGZyb20gJy4vYWNjb3VudHNfcm91dGUnXG5cbmNvbnN0IGFjY291bnRzID0gYW5ndWxhci5tb2R1bGUoJ2Fya2Fhbi5mcm9udGVuZC5hY2NvdW50cycsIFtdKVxuICAuY29uZmlnKGFjY291bnRzUm91dGUpXG4gIC5jb250cm9sbGVyKCdhY2NvdW50c0NvbnRyb2xsZXInLCBhY2NvdW50c0NvbnRyb2xsZXIpXG4gIC5uYW1lXG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzIiwiY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlciA9IGNsYXNzIERhc2hib2FyZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihBcGkpIHtcbiAgICAnbmdJbmplY3QnXG4gICAgdGhpcy5kYXNoYm9hcmRNZXNzYWdlID0gQXBpLnBvc3QoJ3VybCcsIHt9LCB7fSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmRDb250cm9sbGVyIiwiY29uc3QgZGFzaGJvYXJkUm91dGUgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICB2aWV3czoge1xuICAgICAgJ21haW5AJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9tb2R1bGVzL2Rhc2hib2FyZC90ZW1wbGF0ZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2Rhc2hib2FyZENvbnRyb2xsZXIgYXMgdm0nXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXNoYm9hcmRSb3V0ZSIsImltcG9ydCBkYXNoYm9hcmRDb250cm9sbGVyIGZyb20gJy4vZGFzaGJvYXJkX2NvbnRyb2xsZXInXG5pbXBvcnQgZGFzaGJvYXJkUm91dGUgZnJvbSAnLi9kYXNoYm9hcmRfcm91dGUnXG5cbmNvbnN0IGRhc2hib2FyZCA9IGFuZ3VsYXIubW9kdWxlKCdhcmthYW4uZnJvbnRlbmQuZGFzaGJvYXJkJywgW10pXG4gIC5jb25maWcoZGFzaGJvYXJkUm91dGUpXG4gIC5jb250cm9sbGVyKCdkYXNoYm9hcmRDb250cm9sbGVyJywgZGFzaGJvYXJkQ29udHJvbGxlcilcbiAgLm5hbWVcblxuZXhwb3J0IGRlZmF1bHQgZGFzaGJvYXJkIiwiaW1wb3J0IGxvZ2luQ29udHJvbGxlciBmcm9tICcuL2xvZ2luX2NvbnRyb2xsZXInXG5pbXBvcnQgbG9naW5Sb3V0ZSBmcm9tICcuL2xvZ2luX3JvdXRlJ1xuXG5jb25zdCBsb2dpbiA9IGFuZ3VsYXIubW9kdWxlKCdhcmthYW4uZnJvbnRlbmQubG9naW4nLCBbXSlcbiAgLmNvbmZpZyhsb2dpblJvdXRlKVxuICAuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgbG9naW5Db250cm9sbGVyKVxuICAubmFtZVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbiIsIi8qKlxuICogQ29udHJvbGxlciBmb3IgdGhlIGxvZ2luIHNjcmVlbi5cbiAqIEBhdXRob3IgVmluY2VudCBDb3VydG9pcyA8Y291cnRvaXMudmluY2VudEBvdXRsb29rLmNvbT5cbiAqL1xuY29uc3QgbG9naW5Db250cm9sbGVyID0gY2xhc3MgTG9naW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJ25nSW5qZWN0J1xuICAgIHRoaXMudXNlcm5hbWUgPSAnJ1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJ1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbkNvbnRyb2xsZXIiLCJjb25zdCBsb2dpblJvdXRlID0gZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyKSB7XG4gICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcbiAgICB1cmw6ICcvbG9naW4nLFxuICAgIHZpZXdzOiB7XG4gICAgICAnbWFpbkAnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL21vZHVsZXMvbG9naW4vdGVtcGxhdGUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdsb2dpbkNvbnRyb2xsZXIgYXMgdm0nXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpblJvdXRlIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIG1hZGUgdG8gcXVlcnkgdGhlIHNlcnZlciBzaWRlIG9mIHRoZSBhcHBsaWNhdGlvbiB0byBmb3J3YXJkIEFQSSBjYWxscy5cbiAqIEBhdXRob3IgVmluY2VudCBDb3VydG9pcyA8Y291cnRvaXMudmluY2VudEBvdXRsb29rLmNvbT5cbiAqL1xuY29uc3QgQXBpID0gY2xhc3MgQXBpQ2xhc3Mge1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBvZiB0aGUgY2xhc3MsIGluaXRpYWxpemluZyBuZWVkZWQgdmFyaWFibGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSAkaHR0cCAtIHRoZSBIVFRQIHJlcXVlc3RzIG1ha2VyIHNlcnZpY2UgdXNlZCB0byBxdWVyeSB0aGUgQVBJIHNlcnZlci1zaWRlLlxuICAgKi9cbiAgY29uc3RydWN0b3IgKCRodHRwKSB7XG4gICAgJ25nSW5qZWN0J1xuICAgIHRoaXMuaHR0cCA9ICRodHRwXG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSBwb3N0IHJlcXVlc3Qgb24gdGhlIHNlcnZlci1zaWRlIHBhcnQgb2YgdGhlIGFwcGxpY2F0aW9uLCBmb3J3YXJkZWQgYWZ0ZXJ3YXJkIG9uIHRoZSBnYXRld2F5LCBhbmQgdGhlIHNlcnZpY2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSB0aGUgVVJMIG9mIHRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHJlYWNoIGluIHRoZSBBUEkuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIC0gdGhlIHBhcmFtZXRlcnMgeW91IHdhbnQgdG8gcGFzcyBhcyBhIGJvZHkgdG8gdGhlIHJvdXRlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHNlcnZpY2UgdG8gY2hhbmdlIGl0cyBkZWZhdWx0IGJlaGF2aW91ci5cbiAgICovXG4gIHBvc3QgKHVybCwgcGFyYW1ldGVycywgb3B0aW9ucykge1xuICAgIHJldHVybiAnSmUgY29tcHRlIGZhaXJlIHVuZSByZXF1w6p0ZSBlbiBwb3N0IHBvdXIgdsOpcmlmaWVyIHVuIHRydWMgc3VyIGxcXCdBUEknXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBpXG4iLCJjb25zdCBBdXRoZW50aWNhdGlvbiA9IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ2xhc3Mge1xuICBjaGVja1VzZXJTZXNzaW9uICh1c2VybmFtZSwgdG9rZW4pIHtcbiAgICBjb25zb2xlLmxvZygnRXNzYWkgZGUgc2VydmljZScpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb25cbiIsImltcG9ydCBBdXRoZW50aWNhdGlvbiBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uJ1xuaW1wb3J0IEFwaSBmcm9tICcuL2FwaS9hcGknXG5cbmNvbnN0IHNlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoJ2Fya2Fhbi5zZXJ2aWNlcycsIFtdKVxuICAuc2VydmljZSgnQXV0aGVudGljYXRpb24nLCBBdXRoZW50aWNhdGlvbilcbiAgLnNlcnZpY2UoJ0FwaScsIEFwaSlcbiAgLm5hbWVcblxuZXhwb3J0IGRlZmF1bHQgc2VydmljZXNcbiJdfQ==
