// Rotas da aplicação
const express = require('express');
const routes = express.Router();

routes.post('/users', (request,response) => {
  const body = request.body;
  const {name} = request.body;
  const {idade} = request.body
  console.log(body);
 
  return response.json({
    name,
    idade
  });
});

routes.get('/', (request,response) =>{
  return response.json({messagem:'Para cima deles'});
});

module.exports= routes;