// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ounvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form
    
    // Obtém a mensagem
    const mensagem = frm.inMensagem.value;
    
    // Declara variável resposta
    let resposta = "";
    
    // Extrai todas a letras das posições pares (como o indice começa em zero a primeira posição par é 1)
    for (let i = 1; i < mensagem.length; i += 2) {
        resposta += mensagem.charAt(i);
    }
    
    // Extrai todos as letras das posições ímpares (como o indice começa em zero a primeira posição ímpar é 0)
    for (let i = 0; i < mensagem.length; i += 2) {
        resposta += mensagem.charAt(i);
    }
    
    // Exibe a resposta
    resp.innerText = resposta;
});

// Cria "ounvinte" para o evento click do btDecriptografar
frm.btDecriptografar.addEventListener("click", () => {
    // Verificar as validações do elemento form
    if (!frm.checkValidity()) {
        alert("Informe a mensagem a ser decriptografada")
        frm.inMensagem.focus();
        return;
    }

    const mensagem = frm.inMensagem.value;

    const tamanho = mensagem.length;
    const metade = Math.floor(tamanho / 2);

    // Declara variável resposta
    let resposta = "";

    /**
     * Esse código pega uma letra da segunda metade e logo em seguida 
     * a letra correspondente da primeira metade, reconstruindo assim 
     * a mensagem original.
     */

    // Declara a variável i para os loops de modo que esteja acessível ao final do loop ímpar
    let i;

    if (tamanho % 2 === 0) {
        for (i = metade; i < tamanho; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
    } else {
        for (i = metade; i < tamanho - 1; i++) {
            resposta += mensagem.charAt(i);
            resposta += mensagem.charAt(i - metade);
        }
        resposta += mensagem.charAt(i) // Variável i está declarada e acessível
    }

    // Exibe a resposta
    resp.innerText = resposta;
});
