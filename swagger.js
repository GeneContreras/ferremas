const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Rest con Node.js',
      version: '1.0.0',
      description: 'Documentación de la API Rest con Swagger',
    },
    components: {
      schemas: {
        Articulo: {
          type: 'object',
          required: ['nombre', 'precio'],
          properties: {
            _id: {
              type: 'string',
              description: 'ID único del artículo generado por MongoDB',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del artículo',
            },
            descripcion: {
              type: 'string',
              description: 'Descripción del artículo',
            },
            precio: {
              type: 'number',
              description: 'Precio del artículo',
            },
            imagen: {
              type: 'string',
              description: 'Nombre del archivo de imagen del artículo',
            },
            // Agrega más propiedades según la estructura de tu modelo de Artículo
          },
        },
      },
    },
  },
  apis: ['./rutas/*.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;