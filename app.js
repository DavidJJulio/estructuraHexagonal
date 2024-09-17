const { dirname } = require('path');
const ConnectToDatabase = require('./infrastructure/database/mongodb');
const createServer = require('./infrastructure/server/server');

const startApp = async () => {

    //  Conectamos a la base de datos

    let connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.connectOpen();


    //  Inicializamos las rutas

    const app = createServer();


    //Levantamos el aplicativo

    app.listen({port: process.env.EXPRESS_PORT, host:process.env.EXPRESS_HOST}, () => {
        console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();