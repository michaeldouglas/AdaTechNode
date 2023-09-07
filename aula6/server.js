const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/playground', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

const todos = [];
// PRIMEIRA COISA
const todos2 = [];

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Adiciona um novo todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoItem'
 *           example:
 *             id: 1
 *             title: Comprar pão
 *             completed: false
 *     responses:
 *       201:
 *         description: Todo adicionado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1,
 *               title: Comprar pão
 *               completed: false
 */
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

/**
 * @swagger
 * /todos2:
 *   post:
 *     summary: Adiciona um novo todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoItem'
 *           example:
 *             id: 1
 *             title: Comprar salame
 *             completed: false
 *     responses:
 *       201:
 *         description: Todo adicionado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1,
 *               title: Comprar salame
 *               completed: false
 */
app.post('/todos2', (req, res) => {
  const newTodo = req.body;
  todos2.push(newTodo);
  res.status(201).json(newTodo);
});

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Obtém a lista de todos
 *     responses:
 *       200:
 *         description: Lista de todos obtida com sucesso
 *         content:
 *           application/json:
 *             examples:
 *               todos:
 *                 value:
 *                   - id: 1
 *                     title: Comprar pão
 *                     completed: false
 */
app.get('/todos', (req, res) => {
  res.json(todos);
});

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Atualiza um todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do todo a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoItem'
 *           example:
 *             id: 1
 *             title: Comprar pão
 *             completed: true
 *     responses:
 *       200:
 *         description: Todo atualizada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               title: Comprar pão
 *               completed: true
 *       404:
 *         description: Todo não encontrada
 */
app.put('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const updatedTodo = req.body;

  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    todos[index] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo não encontrada' })
  }
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Deleta um todo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do todo a ser deletado
 *     responses:
 *       200:
 *         description: Todo deletada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               title: Comprar pão
 *               completed: false
 *       404:
 *         description: Todo deletado com sucesso
 */
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);

  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: 'Todo deletado com sucesso' })
  }
})

app.listen(3002, () => {
  console.log('Rodando em http://localhost:3002');
})