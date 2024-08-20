// Obtém elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("span");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Obtém conteúdo do campo em maiúsculas
    const fruta = frm.inFruta.value.toUpperCase();

    let resposta = "";

    for (const letra of fruta) {
        if (letra === fruta.charAt(0)) { // se for igual a letra inicial
            resposta += fruta.charAt(0); // adiciona a letra inicial
        } else {
            resposta += "_";
        }
    }

    // Exibe a resposta
    resp.innerText = resposta;

    // Preenche con "*", conforme tamanho
    frm.inFruta.value = "*".repeat(fruta.length);
});