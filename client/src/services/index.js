import api from "./api"
import form from "./forms"
import permissions from "./permissions"
import utils from "./utils"

const services = angular.module('arkaan.frontend.services', [api, forms, permissions, utils]).name

export default services
