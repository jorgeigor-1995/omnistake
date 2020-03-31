const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json);
app.use(routes);

/** 
 * Rotas / Recurso
*/

/**
 * Método http
 * 
 * GET: Busca informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação
 * DETELE: Deletar uma informação
 */

 /**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados na rota após (?) (filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar 
  */

  /**
   * SQL: MySQL, SQLite, PostGreSql, Oracle, SQL Server
   * NoSQL: Mongo, CouchBD
   */

   /**
    * Driver: select * from users
    * query builder: table('users).select('*').where
    */



const PORT = 3333;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

