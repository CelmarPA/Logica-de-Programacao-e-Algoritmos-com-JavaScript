// Cria referência ao frm e ao element h3 (onde será mostrada a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria um "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    
    const quilo = Number(frm.inQuilo.value); // Obtém conteúdo dos campos
    const consumo = Number(frm.inConsumo.value);
    
    const valor = (quilo / 1000) * consumo; // Calcula o valor a ser pago
    resp.innerText = `Valor a pagar: R$${valor.toFixed(2)}`; // exibe a resposta

    e.preventDefault();
});