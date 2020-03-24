const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);



app.listen(3333, ()=> {
  
  console.log('Conectando a base local...');
  console.log('Conectado com sucesso!');

});