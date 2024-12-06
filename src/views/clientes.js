/**
 * Processo de renderizção
 * clientes.html
 */

// Array usado nos métodos para manipulação da estrutura de dados
let arrayCliente = []

//Crud Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Passo 1- slide (capturar os dados dos imputs do form)
let formCliente = document.getElementById('frmClient')
let nomeCliente = document.getElementById('inputNameClient')
let foneCliente = document.getElementById('inputPhoneClient')
let emailCliente = document.getElementById('inputEmailClient')
let cepCliente = document.getElementById('inputCepClient')
let logradouroCliente = document.getElementById('inputLogradouroClient')
let bairroCliente = document.getElementById('inputBairroClient')
let cidadeCliente = document.getElementById('inputCidadeClient')
let ufCliente = document.getElementById('inputUfClient')
let numeroCliente = document.getElementById('inputNumeroClient')
let complementoCliente = document.getElementById('inputComplementoClient')



//Evento  associado ao botão adicionar (quando o botão for pressionado)
formCliente.addEventListener('submit', async (event) => {
    //Evitar o comportamento pradrão de envio em um form
    event.preventDefault()
    //Teste importante! (fluxo de dados)
    //console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - slide (envio das informações para o main)
    //Criar um objeto
    const cliente = {
        nomeCli: nomeCliente.value,
        foneCli: foneCliente.value,
        emailCli: emailCliente.value,
        cepCli: cepCliente.value,
        logradouroCli: logradouroCliente.value,
        bairroCli: bairroCliente.value,
        cidadeCli: cidadeCliente.value,
        ufCli: ufCliente.value,
        numeroCli: numeroCliente.value,
        complementoCli: complementoCliente.value
    }
    api.novoCliente(cliente)
})
//Fim CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// CRUD Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function buscarCliente() {
    // Passo 1 (slide)
    let cliNome = document.getElementById('search-client').value
    console.log(cliNome) // Teste do passo 1
    // Passo 2 (slide) - Enviar o pedido de busca do cliente ao main.js
    api.buscarCliente(cliNome)
    // Passo 5 - Recebimento 
    api.rendenizarCliente((event, dadosCliente) => {
        // Teste de recebimento dos dados do cliente
        console.log(dadosCliente)
        // Passo 6 (slide) - Rendenização dos dados do cliente no formulário
        const clientesRendenizado = JSON.parse(dadosCliente)
        arrayCliente = clientesRendenizado
        // teste para entendimento da lógica
        console.log(arrayCliente)
        // Percorrer o array de clientes, extrair os dados e setar (preencher) os campos do formulário
        arrayCliente.forEach((c) => {
            document.getElementById('inputClient').value = c._id
            document.getElementById('inputNameClient').value = c.nomeCliente
            document.getElementById('inputPhoneClient').value = c.foneCliente
            document.getElementById('inputEmailClient').value = c.emailCliente
            document.getElementById('inputCepClient').value = c.cepCliente
            document.getElementById('inputLogradouroClient').value =c.logradouroCliente
            document.getElementById('inputBairroClient').value = c.bairroCliente
            document.getElementById('inputCidadeClient').value = c.cidadeCliente
            document.getElementById('inputUfClient').value = c.ufCliente
            document.getElementById('inputNumeroClient').value = c.numeroCliente
            document.getElementById('inputComplementoClient').value = c.complementoCliente
            
            
        })
    })
}


// Fim do CRUD Read <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args) => {
    document.getElementById('inputNameClient').value = ""
    document.getElementById('inputPhoneClient').value = ""
    document.getElementById('inputEmailClient').value = ""
    document.getElementById('inputCepClient').value = ""
    document.getElementById('inputLogradouroClient').value = ""
    document.getElementById('inputBairroClient').value = ""
    document.getElementById('inpuCidadeClient').value = ""
    document.getElementById('inpuUfClient').value = ""
    document.getElementById('inpuNumeroClient').value = ""
    document.getElementById('inpuComplementoClient').value = ""
})

// Função que faz a busca do endereço pelo CEP
async function buscarEndereco() {
    const cep = document.getElementById('inputCepClient').value.replace('-', '').replace('.', ''); // Retira caracteres não numéricos

    // Verifica se o CEP tem o formato correto
    if (!cep || cep.length !== 8) {
        return;
    }

    try {
        // Faz a requisição para a API do ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        // Verifica se o CEP retornou erro
        if (data.erro) {
            return;
        }

        // Preenche os campos do formulário com os dados do endereço
        document.getElementById('inputLogradouroClient').value = data.logradouro || '';  // Logradouro
        document.getElementById('inputBairroClient').value = data.bairro || '';    // Bairro
        document.getElementById('inputCidadeClient').value = data.localidade || ''; // Cidade
        document.getElementById('inputUfClient').value = data.uf || '';           // UF

    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}


//Fim - Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>