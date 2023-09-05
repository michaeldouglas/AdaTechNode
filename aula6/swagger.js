const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todos API',
      version: '1.0.0',
      description: 'API para gerenciar os todos'
    },
  },
  apis: ['./server.js'],
  components: {
    examples: {
      TodoItem: {
        value: {
          id: 1,
          title: 'Comprar uma bolacha',
          completed: false
        },
      },
    },
  },
};

const specs = swaggerJSDoc(options);

module.exports = specs;