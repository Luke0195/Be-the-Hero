const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors(
 // origin:  Quando o projeto subir para produção
));
app.use(express.json());
app.use(routes);



app.listen(3333, ()=> {
  
  console.log('Conectando a base local...');
  console.log('Conectado com sucesso!');

});