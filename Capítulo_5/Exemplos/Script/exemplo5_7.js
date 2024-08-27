// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const num = Number(frm.inNumero.value);

    // Inicializa a variável estrelas
    let estrelas = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            estrelas += "*"; // Na posição ímpar
        } else {
            estrelas += "-"; // Na posição par
        }
    }

    // Exibe o resultado
    resp.innerText = estrelas;
});
