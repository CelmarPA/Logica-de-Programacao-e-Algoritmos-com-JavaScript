// Obtém elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// Função verApostaExiste
const verApostaExiste = (peso) => {
    // Se existir dados em localStorage
    if (localStorage.getItem("melanciaPeso")) {
        // Obtém seu contéudo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melaciaPeso").split(";");

        // O Peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString());
    } else {
        return false;
    }
}

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados de entrada nome e peso
    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    // Chama a função que verifica se o peso já foi apostado anteriomente
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...")
        frm.inPeso.focus();
        return;
    }

    // Se houver dados em localStorage
    if (localStorage.getItem("melanciaNome")) {
        // Obtém o conteúdo salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        // Salva os dados
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        // Salva os dados sem ";"
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    // Chama a função que mostra as apostas salvas
    mostrarAposta();
    // Limpa os campos do form
    frm.reset();
    // Foca no campo inNome
    frm.inNome.focus();
});