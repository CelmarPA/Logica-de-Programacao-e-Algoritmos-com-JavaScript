// Obtém elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// Função verApostaExiste
const verApostaExiste = (peso) => {
    // Se existir dados em localStorage
    if (localStorage.getItem("melanciaPeso")) {
        // Obtém seu contéudo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem("melanciaPeso").split(";");

        // O Peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString());
    } else {
        return false;
    }
};

// Função mostrarApostas
const mostrarApostas = () => {
    // Se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        // Limpa o espaço de exibição das apostas (para quando "Limpar APostas")
        respLista.innerText = "";
        return; 
    }

    // Obtém o conteúdo das variáveis salvas no localStorage
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // Inicializa o acumulador das linhas a serem exibidas
    let linhas = "";

    for (let i = 0; i < nomes.length; i++) {
        // Concatena em linhas os nomes dos apostadorese suas apostas
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }

    // Exibe as linhas
    respLista.innerText = linhas;
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
    mostrarApostas();
    // Limpa os campos do form
    frm.reset();
    // Foca no campo inNome
    frm.inNome.focus();
});

// Cria "ouvinte" para o evento click de btVencedor
frm.btVencedor.addEventListener("click", () => {
    // Caso não haja apostas armazenadas
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas.")
        frm.inNome.focus();
        return;
    }

    // Solicita o peso da melancia real ao usuário
    const pesoCorreto = Number(prompt("Qual o peso da melancia? "));

    // Se peso não foi informado retorna
    if (pesoCorreto === 0 || isNaN(pesoCorreto)) {
        return;
    }

    // Obtém os dados armazenado no localStorage
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    // Valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);

    // Percorre as apostas
    for (let i = 0; i < nomes.length; i++) {
        // Calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        // Se a diferença da aposta atual (no loop for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]; // troca o "vencedor"
            vencedorPeso = Number(pesos[i]); // para este elemento
        }
    }

    // Exibe a mensagem com dados do vencedor
    let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
    mensagem += "\n----------------------------------------------";
    mensagem += `\nVencedor: ${vencedorNome}`;
    mensagem += `\nAposta: ${vencedorPeso}gr`
    alert(mensagem);
});

// Cria "ouvinte" para evento click do btLimpar
frm.btLimpar.addEventListener("click", () => {
    // Solicita confimação para excluir dados das apostas
    if(confirm("Confirma exclusão de todas as apostas?")) {
        // Limpas as váriaveis salvas em localStorage
        localStorage.removeItem("melanciaNome");
        localStorage.removeItem("melanciaPeso");
        mostrarApostas();
        frm.inNome.focus()
    }
});

// Chama a função quando a página é carregada, para mostrar as apostas salvas
window.addEventListener("load", mostrarApostas);