// LIBS
require('dotenv').config();
import express from 'express';
import BodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

// NOSSO
const swaggerSpecs = require('./swagger');
import OlaMundo from './teste';

const { PORT } = process.env;

const app = express();
app.use(BodyParser.json());

const todos = [];

// DOCUMENTACAO DA NOSSA API
app.use('/playground', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`A aplicação está rodando em: http://localhost:${PORT}`);
});