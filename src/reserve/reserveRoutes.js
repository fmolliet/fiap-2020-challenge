const { Router } = require('express');

const ReserveController = require('./reserveController');

const routes = Router();

routes.get('/', ReserveController.index)
    .post('/', ReserveController.store);
    
module.exports = routes;