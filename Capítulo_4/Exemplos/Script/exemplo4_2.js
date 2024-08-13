// Cria referência ao form elemento h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita envio do form

    // Obtém os valores do form
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    let peso; // Declara a variável peso
    if (masculino) { // se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    // Exibe o resultado
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
});

frm.addEventListener("reset", () => {
    resp.innerText = "" // limpa o conteúdo do elemento h3
});
