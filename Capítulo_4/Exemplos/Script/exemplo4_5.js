// Cria referência ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" de evento, acionado  pelo botão submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número inserido no form
    const num = Number(frm.inNumero.value);

    // Calcula a raiz quadrada do número
    const raiz = Math.sqrt(num);

    // Condição para exibir a resposta
    if (Number.isInteger(raiz)) { // se a raiz for um número inteiro
        resp.innerText = `Raiz Quadrada: ${raiz}`; // exibe a raiz
    } else {
        resp.innerText = `Não há raiz exata pra ${num}`; // exibe a mensagem
    }
});
