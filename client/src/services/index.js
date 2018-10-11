import api from "./api"
import forms from "./forms"
import permissions from "./permissions"
import utils from "./utils"
import websockets from "./websockets"

const services = angular.module('arkaan.frontend.services', [api, forms, permissions, utils, websockets]).name

export default services
