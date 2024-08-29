// Obtém os elementos da página
const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

// Declara as variáveis globais
let palavraSorteada;
let dicaSorteada;

// Cria "ouvinte" para evento load da página
window.addEventListener("load", () => {
    // Se não houver palavras cadastradas
    if (!localStorage.getItem("jogoPalavra")) {
        alert("Cadastre palavras para jogar");
        // Desabilita os botões e inLetra
        frm.inLetra.disabled = true;
        frm.btJogar.disabled = true;
        frm.btVerDica.disabled = true;
    }

    // Obtém os dados do localStorage e sepra em elementos de vetor
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");

    // Número de palavras cadastradas
    const tamanho = palavras.length;

    // Gera um valor aleatóriamente entre 0 e tamanho - 1 (pois arredonda para baixo)
    const numAleatorio = Math.floor(Math.random() * tamanho);

    // Obtém as plavras (em maiúsculas) e dica na posição do nº aleatório gerado
    palavraSorteada = palavras[numAleatorio].toUpperCase();
    dicaSorteada = dicas[numAleatorio];

    // Inicializa variável para montar a palavra exibida (com letra inicial e "_")
    let novaPalavra = "";

    // Loop for para exibir a letra incial e as demais ocorrências desta letra na palavra 
    for (const letra of palavraSorteada) {
        // Se igual a letra inicial, acrescenta esta letra na exibição
        if (letra === palavraSorteada.charAt(0)) {
            novaPalavra += palavraSorteada.charAt(0);
        } else {
            novaPalavra += "_"; // Senão, acrescenta "_"
        }
    }

    // Exibe a novaPalavra
    respPalavra.innerText = novaPalavra;
});

// Função trocarStatus
const trocarStatus = (num) => {
    if (num > 0) imgStatus.src = `Image/emoji${num}.jpg`;
};

// Função verificarFim
const verificarFim = () => {
    // Obtém o nº de chances
    const chances = Number(respChances.innerText);

    if (chances === 0) {
        respMensagemFinal.className = "display-3 text-danger";
        respMensagemFinal.innerText = `Ah... é ${palavraSorteada}. Você Perdeu!`;
        concluirJogo();
    } else if (respPalavra.innerText === palavraSorteada) {
        respMensagemFinal.className = "display-3 text-primary";
        respMensagemFinal.innerText = `Parabéns!! Você Ganhou!!!`;
        // Exibe a figura do "rostinho feliz"
        trocarStatus(4);
        concluirJogo();
    }
}

// Função concluirJogo, modifica o texto da dica e desabilita os botões de jogar
const concluirJogo = () => {
    respDica.innerText = "* Clique no botão 'Iniciar Jogo' para jogar novamente.";
    frm.inLetra.disabled =  true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;  
};

// Cria "ouvinte" para o evento click de btVerDica
frm.btVerDica.addEventListener("click", () => {
    // Verifica se o jogador já clicou anteriormente no botão
    if (respErros.innerText.includes("*")) {
        alert("Você já solicitou a dica...")
        frm.inLetra.focus();
        return;
    }

    // Exibe a dica
    respDica.innerText = "*" + dicaSorteada;
    // Acrescenta "*" no erros
    respErros.innerText = "*";

    // Diminui 1 em chances
    const chances = Number(respChances.innerText) - 1;
    // Mostra o nº de chances
    respChances.innerText = chances;

    // Troca a imagem do status
    trocarStatus(chances);

    // Verifica se atingiu limite de chances
    verificarFim();

    // Joga o foco em inLetra
    frm.inLetra.focus();
});

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form
    
    // Obtém o conteúdo do campo inLetra
    const letra = frm.inLetra.value.toUpperCase();

    // Obtém o conteúdo dos elementos página
    let erros = respErros.innerText;
    let palavra = respPalavra.innerText;

    // Verifica se a letra apostada já consta em erros ou na palavra
    if (erros.includes("letra") || palavra.includes(letra)) {
        alert("Você já apostou esta letra");
        frm.inLetra.focus();
        return;
    }

    // Se letra constra em palavraSorteada
    if (palavraSorteada.includes(letra)) {
        let novaPalavra = ""; // Para compor a novaPalavra
        // Loop for para montar a palavra a ser exibida
        for (let i = 0; i < palavraSorteada.length; i++) {
            // Se iguala a letra apostada; acrescenta esta letra na exibição
            if (palavraSorteada.charAt(i) === letra) {
                novaPalavra += letra;
            } else { // Senão, acrescenta a letra ou "_" existente
                novaPalavra += palavra.charAt(i); 
            }
        }
        // Exibe a novaPalavra
        respPalavra.innerText = novaPalavra;
    } else {
        // Acrescenta a letra aos erros
        respErros.innerText += letra;
        // Diminui nº de chances
        const chances = Number(respChances.innerText) - 1;
        // Exibe novo nº de chances
        respChances.innerText = chances;

        // Troca imagem
        trocarStatus(chances);
    }

    // Verifica se já ganhou ou perdeu
    verificarFim();

    // Limpa o campo e foca
    frm.inLetra.value = "";
    frm.inLetra.focus();
});
