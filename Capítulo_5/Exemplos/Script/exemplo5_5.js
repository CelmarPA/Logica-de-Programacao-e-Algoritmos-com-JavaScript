// Obtém os elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Inicializa as variáveis globais
let resposta = "";
let numContas = 0; // contador das contas
let valTotal = 0; // acumulador do valor das contas

// Cria "ouvinte" para o evento de submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form
    
    // Obtém as contas e valores
    const conta = frm.inConta.value;
    const valor = Number(frm.inValor.value);

    // Incrementa o contador
    numContas++;

    // Acumula o total
    valTotal += valor;

    // Monta a resposta
    resposta += `${conta} - R$${valor.toFixed(2)}\n`;

    // Exibe o resultado
    resp1.innerText = `${resposta}--------------------------------`
    resp2.innerText = `${numContas} - Total: R$${valTotal.toFixed(2)}`;

    // Limpa os campos do form
    frm.inConta.value = "";
    frm.inValor.value = "";

    // Foca no campo inConta
    frm.inConta.focus();
});

// Cria "ouvinte" para o evento de reset
frm.addEventListener("reset", (e) => {
    // Reset os valores das variáveis
    resposta = "";
    numContas = 0;
    valTotal = 0;

    // Limpa os campos de resposta
    resp1.innerText = "";
    resp2.innerText = "";

    // Limpa os campos do form
    frm.inConta.value = "";
    frm.inValor.value = "";

    // Foca no campo inConta
    frm.inConta.focus();
});
