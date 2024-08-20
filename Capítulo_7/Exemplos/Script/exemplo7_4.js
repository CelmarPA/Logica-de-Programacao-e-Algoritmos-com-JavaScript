// Obtém elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form

    // Obtém o nome sem espaços em branco do início e final da string
    const nome = frm.inNome.value.trim();

    if (!nome.includes(" ")) { // se o nome não (!) possuir espaço
        alert("Informe nome completo...")
        return;
    }

    const priEspaco = nome.indexOf(" "); // posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" "); // posição do último espaço

    // Copia nome e sobrenome usando os parâmetros do substring()
    const cracha = nome.substring(0, priEspaco) + nome.substring(ultEspaco);

    // Exibe o resultado
    resp.innerText = `Crachá: ${cracha}`;
});
