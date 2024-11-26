/**
 * Modelo de dados (Clientes)
 */

// Importação de recursos
const { model, Schema } = require('mongoose')

// Criação da estrutura de dados ("Tabela") que será usada no banco
const clienteSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    emailCliente: {
        type: String
    }
})

// Exportar para o main
// Para modificar o nome da coleção ("Tabela"), basta modficar a linha abaixo o rótulo 'Clientes', sempre iniciando com letra Maíuscula
module.exports = model('Clientes', clienteSchema)