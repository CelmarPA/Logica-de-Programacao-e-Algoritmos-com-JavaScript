// Cria a referência ao form e ao elemento h3 (onde será exibida a resposta)
const formulario = document.querySelector("form");
// const nome = document.querySelector("form").inNome.value
const resp = document.querySelector("h3");

// Cria um "ouvinte" de evento, acionado quando o botão submit é clicado
formulario.addEventListener("submit", (e) => {
    const nome = formulario.inNome.value; // Obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // exibe a resposta do programa
    e.preventDefault(); // evita o envio do form
});
