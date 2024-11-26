/**
 * Modelo de dados (Fornecedores)
 */

// Importação de recursos
const { model, Schema } = require('mongoose')

// Criação da estrutura de dados ("Tabela") que será usada no banco
const produtoSchema = new Schema({
    nomeProdutos: {
        type: String
    },
    codigoProdutos: {
        type: String
    },
    precoProdutos: {
        type: String
    }
})

// Exportar para o main
// Para modificar o nome da coleção ("Tabela"), basta modficar a linha abaixo o rótulo 'Clientes', sempre iniciando com letra Maíuscula
module.exports = model('Produto', produtoSchema)