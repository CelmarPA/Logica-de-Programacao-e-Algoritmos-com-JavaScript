// Cria referência aos elementos form e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria "ouvinte" do evendo submit
frm.addEventListener("submit", (e) => {
    resp1.innerText = "";
    resp2.innerText = "";

    e.preventDefault(); // Evita envio do form

    // Obtém o valor do depósito
    const valor = Number(frm.inValor.value);

    // Verifica valor e calcula o tempo e troco se existir
    let tempo, troco;
    if (valor < 1) {
        alert(`Valor Insuficiente!`);
        frm.inValor.focus();
        return;
    } else if (valor <= 1.74) {
        tempo = 30;
        troco = valor - 1;
    } else if (valor <= 2.99) {
        tempo = 60;
        troco = valor - 1.75;
    } else {
        tempo = 120;
        troco = valor - 3;
    }

    if (troco > 0) {
        resp1.innerText = `Tempo: ${tempo} min`;
        resp2.innerText = `Troco: R$${troco.toFixed(2)}`;
    } else {
        resp1.innerText = `Tempo: ${tempo} min`;
    }
});
