const { Router, request, response } = require('express');
const emprestimocontroller = require('./controllers/emprestimocontroller');

const routes = Router();

routes.post('/',emprestimocontroller.create);
routes.post('/simular',emprestimocontroller.simular);
routes.get('/test',(request,response) => {
    return response.json('We did it')
})
module.exports = routes;