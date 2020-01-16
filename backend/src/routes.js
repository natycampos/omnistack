const { Router } = require('express'); 
const DevController = require('./controlers/DevController');
const SearchController = require('./controlers/SearchController');

const routes = Router(); 

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:
// Query Params: request.query  [GET]         (Filtros, ordenação, paginação...)
// Route Params: request.params [PUSH/DELETE] (Identificar um recurso na alteração ou remoção)
// Body:         request.body   [POST]        (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes; 