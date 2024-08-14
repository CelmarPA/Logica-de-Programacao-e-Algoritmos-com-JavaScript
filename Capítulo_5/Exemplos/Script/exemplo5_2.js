// Cria referência aos elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const num = Number(frm.inNumero.value);

    // String para montar a resposta
    let resposta = `\n Entre ${num} e 1: `;

    // Verifica se a entrada é valida
    if (num < 1) {
        alert("Valor deve ser maior ou igual a 1!");
        frm.inNumero.value = "";
        frm.inNumero.focus();
        return;
    }
    // Laço de repetição para contagem

    for (let i = num; i > 1; i--) {
        resposta += `${i}, `;
    }

    // Exibe a resposta
    resp.innerText = resposta + "1 → FIM!";
});

// Cria "ouvinte" para evento reset
frm.addEventListener("reset", (e) => {
    resp.innerText = ""; // Limpa o campo de resposta
    frm.inNumero.focus();
});
