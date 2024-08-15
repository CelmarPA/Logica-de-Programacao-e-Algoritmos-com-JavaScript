// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém fruta e a quantidade
    const fruta = frm.inFruta.value;
    const num = Number(frm.inNumero.value);

    // Incializa a variavel resposta
    let resposta = "";

    for (let i = 1; i <= num; i++) {
        if (i < num) {
            resposta += `${fruta} * `;
        } else {
            resposta += `${fruta} `;
        }
    }
    
    // Exibe a resposta
    resp.innerText = resposta;

    // Limpa campos do form
    frm.inFruta.value = "";
    frm.inNumero.value = "";

    // Foca no campo inFruta
    frm.inFruta.focus();
});

// Cria "ouvinte" para o evento reset
frm.addEventListener("reset", (e) => {
    // Limpa campos do form
    frm.inFruta.value = "";
    frm.inNumero.value = "";

    // Foca no campo inFruta
    frm.inFruta.focus();

    // Limpa o campo de respota
    resp.innerText = "";
});
