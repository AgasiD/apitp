const express = require('express');
const cors = require('cors');
const { connectDB } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.paths = {
            receta: '/api/receta',
        }
     
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Conexion con la base de datos
        this.connectDB();
    }

    async connectDB(){
        await connectDB();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
         this.app.use( this.paths.receta, require('../routes/RecetaRoutes'));
       
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
