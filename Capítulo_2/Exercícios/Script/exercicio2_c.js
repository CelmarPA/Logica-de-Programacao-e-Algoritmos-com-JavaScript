// Cria referência os elementos from e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    // Obtém o conteúdo dos campos
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    // O valor com desconto
    const descProd = preco * 0.50;
    const valor = (preco * 2) + descProd;

    // Exibe a resposta
    resp1.innerText = `${produto} - Promoção: Leve 3 por: R$${valor.toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas: R$${descProd.toFixed(2)}`;

    e.preventDefault(); // Evita o envio do form
});
