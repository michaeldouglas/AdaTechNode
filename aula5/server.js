// LIBS
require('dotenv').config();
const express = require('express');
const BodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

// NOSSO
const swaggerSpecs = require('./swagger');
import OlaMundo from './teste';


const { PORT } = process.env;

const app = express();
app.use(BodyParser.json());

const todos = [];

// DOCUMENTACAO DA NOSSA API
app.use('/playground', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Obtém a lista de todos
 *     responses:
 *       201:
 *         description: Ola mundo
 *         content:
 *           application/json:
 *             examples:
 *               todos:
 *                 value:
 *                   - id: 1
 *                     title: Comprar leite
 *                     completed: false
 */
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`A aplicação está rodando em: http://localhost:${PORT}`);
});