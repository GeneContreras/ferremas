const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

//inicilaizar app
console.log("app de node arrancada");
//conectar a la bbdd
conexion();
//crear servidor node, es necesario importar express
const app = express();

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const puerto = 3900;
//configurar cors
//uso del middleware = ejecutar el cors antes de que se ejecute una ruta 
app.use(cors());
//leer y convertir el body a un objeto de js
app.use(express.json()); //recibir datos con content-type app/json
app.use(express.urlencoded({extended:true})); //convertir cada propiedad del body y lo asigno a una propiedad del objeto json.
//Rutas
const rutas_articulo = require("./rutas/articulo");
//cargo las rutas
app.use("/api", rutas_articulo);
//Rutas pruebas
app.get("/probando", (req, res) => {
    console.log("endpoint probando");
    //retorna el 200 si es exitoso
    return res.status(200).send(` 
        <div> 
            <h1> Probando </h1>
        `);
});

app.get("/", (req, res) => {
    console.log("endpoint probando");
    return res.status(200).send(`
        <h1> funcionando ok </h1>
        `);
});

app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});