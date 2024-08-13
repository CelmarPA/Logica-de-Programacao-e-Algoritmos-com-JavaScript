// Cria referência aos elementos form e h3
const frm = document.querySelector("form");
const resp = document.querySelector("#outResp");

// Cria "ouvinte" de evento, acionado quando botão submit é clicado
frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value); // Obtém o conteúdo dos campos
    const tempo = Number(frm.inTempo.value);

    // Calcula o valor a pagar
    const valor =  preco * (Math.ceil(tempo / 15));

    resp.innerText = `Valor a Pagar: R$${valor.toFixed(2)}`; // exibe a resposta

    e.preventDefault(); // Evita o envido do form
});
