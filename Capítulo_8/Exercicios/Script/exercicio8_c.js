// Obtém elementos da página
const frm = document.querySelector("form");
const convenio = document.querySelector("#pConvenio");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Função calcularDesconto
const calcularDesconto = (valor, desc) => valor * (desc / 100);

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form

    // Obtém o valor 
    const valor = Number(frm.inValor.value);

    // Declara a variável desconto
    let desconto;

    // Verifica se o cliente possui convênio
    if (frm.rbSim.checked) {
        if (frm.inConvenio.value == "amigo") {
            desconto = calcularDesconto(valor, 20);
        } else {
            desconto = calcularDesconto(valor, 50);
        }
    } else {
        desconto = calcularDesconto(valor, 10);
    }

    // Exibe resultado
    resp1.innerText = `Desconto: R$${desconto.toFixed(2)}`;
    resp2.innerText = `A Pagar: R$${(valor - desconto).toFixed(2)}`;
});

// Cria "ouvinte" para evento change do rbSim
frm.rbSim.addEventListener("change", () => {
    convenio.className = "exibe";
});

// Cria "ouvinte" para evento change do rbNao
frm.rbNao.addEventListener("change", () => {
    convenio.className = "oculta";
});
