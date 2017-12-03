import dashboard from './modules/dashboard/'
import accounts from './modules/accounts/'
import login from './modules/login/'

angular.module('arkaan.frontend', ['ui.router', dashboard, accounts, login])