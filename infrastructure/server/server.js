// Configuración y puesta en marcha del servidor Express.
const express = require('express');
const path = require('path');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling');
const { limiTotal } = require('../middlewares/rateLimit');
const userRepository = require('../../domain/repository/userRepository')



// Esta funcion inicializa todas las rutas de la aplicación, luego será utilizada en app.js para correr la aplicación.

const createServer = () => {

    const app = express();
    app.use(express.json());

    const user = new userRepository()

    //  jsonParseErrorHandler: 
    //
    //  Esto es un middleware. Es una funcion que utilizamos para los errores de sintaxis en el body de las request que recibimos del frontend



    //  limiTotal:
    //
    //  LimiTotal es un middleware que se encarga de verificar que las solicitudes realizadas no sean hechas por bots, también limita la cantidad
    //  de solicitudes que un usuario puede hacer a 100 cada 15 minutos.

    app.use(jsonParseErrorHandler);
    app.use(limiTotal);

    //Utilizamos los archivos estaticos, para poder levantar el front-end
    
    // app.use('/css', express.static(path.join(__dirname, 'css')));
    // app.use('/js', express.static(path.join(process.env.EXPRESS_STATIC, 'js')));
    // app.use('/storage', express.static(path.join(process.env.EXPRESS_STATIC, 'storage')));

    //Aqui utilizamos todas las rutas que tenemos definidas
    
    return app;
};

module.exports = createServer;