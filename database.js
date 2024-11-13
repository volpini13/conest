/**
 * modulo de conexão com o banco de dados
 * uso do mongoose
 */


const mongoose = require('mongoose')

/* definir a url e authenciação do banco de dados */

const url = 'mongodb+srv://admin:123senac@clusterconest.vzemu.mongodb.net/'

/* status de conexão (icone de conexão)*/

let isConnected = false

const dbConnect = async () => {
    if(isConnected === true) {
        await conectar()
    }
}

// conectar

const conectar = async () => {
    if(isConnected === false) {
        try {
            await mongoose.connect(url)
            isConnected = true //sinalizar que o banco está conectado
            console.log("MongoDB conectado")
        }catch (error) {
            console.log(`problema detectado: ${error}`)
        }
    }
}



// desconectar
const desconectar = async () => {
    if(isConnected === false) {
        try {
            await mongoose.disconnect(url)
            isConnected = true //sinalizar que o banco está conectado
            console.log("MongoDB desconectado")
        }catch (error) {
            console.log(`problema detectado: ${error}`)
        }
    }
}