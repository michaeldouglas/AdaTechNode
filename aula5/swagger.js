const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de TODOS',
      version: '0.0.1',
      description: 'É uma API de gerenciar TODOS',
      license: 'Apache License 2.0',
    },
  },
  apis: ['./server.js'],
};

const specs = swaggerJSDoc(options);

module.exports = specs;