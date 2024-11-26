/**
 * Modelo de dados (Fornecedores)
 */

// Importação de recursos
const { model, Schema } = require('mongoose')

// Criação da estrutura de dados ("Tabela") que será usada no banco
const fornecedorSchema = new Schema({
    nomeFornecedor: {
        type: String
    },
    foneFornecedor: {
        type: String
    },
    siteFornecedor: {
        type: String
    }
})

// Exportar para o main
// Para modificar o nome da coleção ("Tabela"), basta modficar a linha abaixo o rótulo 'Clientes', sempre iniciando com letra Maíuscula
module.exports = model('Fornecedores', fornecedorSchema)