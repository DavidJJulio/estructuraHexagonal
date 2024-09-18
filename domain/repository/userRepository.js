//  IMPORTACIONES

const Usuario = require('../model/userModel');
const bcrypt = require ("bcryptjs")
const jwt = require("jsonwebtoken")



// Creamos la clase que contendra todos los metodos de usuarios

class userRepository {

    //Metodo para buscar a un usuario por el apodo:

    async buscarUsuarioPorNickname({apodo: apodo}) {
        try {

            const usuario = new Usuario()
            let query = [

                { $match: { apodo } }

            ]

            console.log(await usuario.aggregateData(query))

            return await usuario.aggregateData(query)

        } catch (error) {

            throw new Error(JSON.stringify({status: 404, message: "Usuario no encontrado"}))

        }

    }

}



//Exportamos la clase

module.exports = userRepository
