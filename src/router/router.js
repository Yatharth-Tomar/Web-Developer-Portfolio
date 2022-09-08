const express = require('express');
const render = require('../render/render');
const controller = require('../controller/controller');

const route = express.Router();

route.get('/', render.home);

//API
route.post('/message', controller.post);

module.exports = route;
