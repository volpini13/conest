/**
 * Processo de rendenização
 * clientes.html
 */

// CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Passo 1 - slide (capturar os dados dos inputs do form)
let formProdutos = document.getElementById('frmProdutos')
let nomeProdutos = document.getElementById('inputNameProdutos')
let codigoProdutos = document.getElementById('inputCodigoProdutos')
let precoProdutos = document.getElementById('inputPrecoProdutos')

// Evento associado ao botão adicionar (quando o botão for pressionado)
formProdutos.addEventListener('submit', async (event) => {
    // Editar o comportamento padrão de envio em um form
    event.preventDefault()
    // Teste Importante! (fluxo dos dados)
   // console.log(nomeFornecedor.value, foneFornecedor.value, siteFornecedor.value)

    // Passo 2 - slide (envio das informações para o main)
    // Criar um objeto
    const produtos = {
        nomeProd: nomeProdutos.value,
        codigoProd: codigoProdutos.value,
        precoProd: precoProdutos.value
    }
    api.novoProdutos(produtos)
})
// Fim do CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    let nomeProdutos = document.getElementById('inputNameProdutos').value = ""
    let codigoProdutos = document.getElementById('inputCodigoProdutos').value = ""
    let precoProdutos = document.getElementById('inputPrecoProdutos').value = ""
})
// Fim Reset Form <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
