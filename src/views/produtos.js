/**
 * Processo de renderizção
 * clientes.html
 */

let arrayProdutos = []
let arrayCodigos = []

//Crud Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Passo 1- slide (capturar os dados dos imputs do form)
let formProdutos = document.getElementById('frmProduct')
let nomeProdutos = document.getElementById('inputNameProduct')
let precoProdutos = document.getElementById('inputPrecoProduct') 
let codigoProdutos = document.getElementById('inputCodigoProduct')

//Evento  associado ao botão adicionar (quando o botão for pressionado)
formProdutos.addEventListener('submit', async (event) => {
    //Evitar o comportamento pradrão de envio em um form
    event.preventDefault()
    //Teste importante! (fluxo de dados)
    //console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - slide (envio das informações para o main)
    //Criar um objeto
    const produtos = {
        nomePro: nomeProdutos.value, 
        precoPro: precoProdutos.value, 
        codigoPro: codigoProdutos.value
    }
    api.novoProdutos(produtos)
})
//Fim CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CRUD Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function buscarProdutos() {
    // Passo 1 (slide)
    let proNome = document.getElementById('search-product').value
    console.log(proNome) // Teste do passo 1
    // Passo 2 (slide) - Enviar o pedido de busca do cliente ao main.js
    api.buscarProdutos(proNome)
    // Passo 5 - Recebimento 
    api.rendenizarProdutos((event, dadosProdutos) => {
        // Teste de recebimento dos dados do cliente
        console.log(dadosProdutos)
        // Passo 6 (slide) - Rendenização dos dados do cliente no formulário
        const produtosRendenizado = JSON.parse(dadosProdutos)
        arrayProdutos = produtosRendenizado
        // teste para entendimento da lógica
        console.log(arrayProdutos)
        // Percorrer o array de clientes, extrair os dados e setar (preencher) os campos do formulário
        arrayProdutos.forEach((p) => {
            document.getElementById('inputProduct').value = p._id
            document.getElementById('inputNameProduct').value = p.nomeProdutos
            document.getElementById('inputPrecoProduct').value = p.precoProdutos
            document.getElementById('inputCodigoProduct').value = p.codigoProdutos    
        })
    })}
    function buscarCodigo() {
        // Passo 1 (slide)
        let proCodigo = document.getElementById('search-codigo').value
        console.log(proCodigo) // Teste do passo 1
        // Passo 2 (slide) - Enviar o pedido de busca do cliente ao main.js
        api.buscarCodigo(proCodigo)
        // Passo 5 - Recebimento 
        api.rendenizarCodigos((event, codigoProdutos) => {
            // Teste de recebimento dos dados do cliente
            console.log(codigoProdutos)
            // Passo 6 (slide) - Rendenização dos dados do cliente no formulário
            const codigosRendenizado = JSON.parse(codigoProdutos)
            arrayCodigos = codigosRendenizado
            // teste para entendimento da lógica
            console.log(arrayCodigos)
            // Percorrer o array de clientes, extrair os dados e setar (preencher) os campos do formulário
            arrayCodigos.forEach((p) => {
                document.getElementById('inputProduct').value = p._id
                document.getElementById('inputNameProduct').value = p.nomeProdutos
                document.getElementById('inputPrecoProduct').value = p.precoProdutos
                document.getElementById('inputCodigoProduct').value = p.codigoProdutos    
            })
        })}
    


// Fim do CRUD Read <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args)=>{
   document.getElementById('inputNameProduct').value=""
   document.getElementById('inputPrecoProduct').value=""
   document.getElementById('inputCodigoProduct').value=""
})

//Fim - Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>