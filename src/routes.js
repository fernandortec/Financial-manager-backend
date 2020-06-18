const { Router } = require('express');
const emprestimocontroller = require('./controllers/emprestimocontroller');

const routes = Router();

routes.post('/',emprestimocontroller.create);
routes.post('/simular',emprestimocontroller.simular);

module.exports = routes;