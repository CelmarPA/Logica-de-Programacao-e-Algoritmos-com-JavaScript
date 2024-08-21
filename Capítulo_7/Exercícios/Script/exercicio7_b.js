// Obtém elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    // Valida as informações do form
    if (!frm.checkValidity()) {
        alert("Informe a frase para verificação");
        frm.inFrase.focus();
        return;
    }

    e.preventDefault(); // Evita o envio do form

    // Obtém a frase já em Upper Case e sem espaços no inicio e fim
    const frase = frm.inFrase.value.toUpperCase().trim();

    // Declara e inicializa um várivel auxiliar
    let aux = "";

    // Retira todos os espaços da frase
    aux = frase.split(" ").join("").replace(/[^\W]/g, "");

    // Obtém a frase inversa
    const fraseInversa = aux.split("").reverse().join("");

    // Verifica se é um palíndromo e exibe o resultado
    if (aux === fraseInversa) {
        resp.innerText = `${frase} é um Palíndromo!`;
    } else {
        resp.innerText = `${frase} não é um Palíndromo.`;
    }
});
