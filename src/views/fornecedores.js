/**
 * Processo de rendenização
 * clientes.html
 */

// CRUD Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Passo 1 - slide (capturar os dados dos inputs do form)
let formFornecedor = document.getElementById('frmFornecedor')
let nomeFornecedor = document.getElementById('inputNameFornecedor')
let foneFornecedor = document.getElementById('inputPhoneFornecedor')
let siteFornecedor = document.getElementById('inputSiteFornecedor')

// Evento associado ao botão adicionar (quando o botão for pressionado)
formFornecedor.addEventListener('submit', async (event) => {
    // Editar o comportamento padrão de envio em um form
    event.preventDefault()
    // Teste Importante! (fluxo dos dados)
    console.log(nomeFornecedor.value, foneFornecedor.value, siteFornecedor.value)

    // Passo 2 - slide (envio das informações para o main)
    // Criar um objeto
    const fornecedor = {
        nomeForn: nomeFornecedor.value,
        foneForn: foneFornecedor.value,
        siteForn: siteFornecedor.value
    }
    api.novoFornecedor(fornecedor)
})
// Fim do CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    let nomeFornecedor = document.getElementById('inputNameFornecedor').value = ""
    let foneFornecedor = document.getElementById('inputPhoneFornecedor').value = ""
    let siteFornecedor = document.getElementById('inputSiteFornecedor').value = ""
})
// Fim Reset Form <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
