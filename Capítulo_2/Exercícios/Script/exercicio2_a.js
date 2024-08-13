// Cria referência ao form e aos elementos h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria um "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value; // Obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value);
    const valor = preco  * 2
    // Calcula o valor com desconto
    const centavos = valor - (Math.floor(valor));
    const total = valor - centavos;

    resp1.innerText = `Promoção de ${medicamento}`; // Exibe as respostas
    resp2.innerText = `Leve 2 por apenas: R$${total.toFixed(2)}`;

    e.preventDefault();
});
