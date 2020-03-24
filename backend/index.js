const express = require('express');

const app = express();

app.use(express.json());

/* Rota/Recurso


*/

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  *  Query  Params:  Parâmetros nomeadoos enviados na rota após o simbolo "?"(Filtros, paginação);
  *  Routes Params:  Parâmetros utilizados pela para identificar recursos.
  *  Request Body:   Corpo da requisição, utilizado par criar ou alterar recursos
  * 
  */

/**
 * SQL: MYSQL, SQLite, PostgreSQL, Oracle, Microsoft SQLServer
 * NoSQL: MongoDB, CouchDB,
 */
 
 /**
  *  Formas de se usar  do Banco de dados SQLite
  * 
  *   Driver : select * from users
  *   Query Builder : table('users').select(*).where() usando JS para fazer as querys
  */


app.post('/users', (request,response) => {
    const body = request.body;
    const {name} = request.body;
    const {idade} = request.body
    console.log(body);
   
    return response.json({
      name,
      idade
    });
});

app.listen(3333, ()=> {
  
  console.log('Conectando a base local...');
  console.log('Conectado com sucesso!');

});