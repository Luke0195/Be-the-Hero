// Rotas da aplicação
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncedentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController =require('./controllers/SessionController');

const routes = express.Router();

//Rota da sessão

routes.post('/sessions', SessionController.store);

// Rotas da ONGS
routes.get('/ongs', OngController.index);
routes.get('/ongs/:id',OngController.show);
routes.post('/ongs',OngController.store);
routes.delete('/ongs/:id',OngController.destroy);

routes.get('/profile',ProfileController.index);

// Rotas de Incidents
routes.post('/incidents',IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.destroy);


module.exports= routes;