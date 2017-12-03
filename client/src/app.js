import dashboard from './modules/dashboard/'
import accounts from './modules/accounts/'
import login from './modules/login/'
import services from './services'
import configuration from './configuration'

angular.module('arkaan.frontend', ['ui.router', dashboard, accounts, login, services, configuration])