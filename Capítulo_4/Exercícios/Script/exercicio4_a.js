// Cria referência para os elementos form e h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um "ouvinte" de evento para submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio do form
    
    // Obtém o valor do número
    const numero = Number(frm.inNumero.value);

    // Verifica se o número é par ou ímpar com operador ternário
    const resultado = numero % 2 == 0 ? "Par" : "Ímpar";

    // Exibe a resposta
    resp.innerText = `O número ${numero} é: ${resultado}`;
});
