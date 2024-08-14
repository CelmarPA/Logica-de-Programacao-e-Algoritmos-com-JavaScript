// Cria referência para os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const num = Number(frm.inNumero.value);

    let resposta = "";

    // Cria laço de repetiçao for
    for (let i = 1; i <= 10; i++) {
        // a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta += `${num} x ${i} = ${num * i}\n`;
    }

    // O conteúdo da tag pre é alterado  para exibir a tabuada
    resp.innerText = resposta;
});

// Cria "ouvinte" para evento reset
frm.addEventListener("reset", (e) => {
    resp.innerText = "";
    frm.inNumero.focus();
});
