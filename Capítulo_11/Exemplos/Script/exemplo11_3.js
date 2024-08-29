// Obtém os elementos da página
const frm = document.querySelector("form");

// Cria "ounvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a palavra e a dica
    const palavra = frm.inPalavra.value;
    const dica = frm.inDica.value;

    // Valida o preenchimento 
    if (palavra.includes(" ")) {
        alert("Informe uma palavra válida (sem espaços)");
        frm.inPalavra.value = "";
        frm.inPalavra.focus();
        return;
    }

    // Se já existem dados em localStorage, grava o conteúdo anterior + ";" + palavra / dica
    if (localStorage.getItem("jogoPalavra")) {
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
    } else {
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }

    // Verifica se foi salvo
    if (localStorage.getItem("jogoPalavra")) {
        alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso!`)
    }

    // Limpa o form e foca
    frm.reset();
    frm.inPalavra.focus();
});
