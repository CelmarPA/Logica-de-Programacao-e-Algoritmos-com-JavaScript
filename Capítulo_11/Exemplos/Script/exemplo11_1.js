// Obtém elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// Declara e inicializa vetor com nome dos cavalos do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// Vetor que irá armazenar um objeto aposta (com n° cavalo e valor da aposta)
const apostas = [];

// Função obterCavalo
const obterCavalo = (num) => {
    const posicao = num - 1; // Subtrai um pois posição inicial em 0
    // Retorna o nome do cavalo
    return CAVALOS[posicao];
};

// Função validarCavalo
const validarCavalo = (num) => {
    // Retorna o valor resultado da condição (true or false)
    return num >= 1 && num <= CAVALOS.length;
};

// Função contarApostas
const contarApostas = (num) => {
    let contador = 0;
    // Percorre o vetor apostas
    for (const aposta of apostas) {
        // Verifica se a aposta é no cavalo passado com paramentro
        if (aposta.cavalo === num) {
            // Incrementa o contador
            contador++;
        }
    }
    // Retorna o contado com o nº de apostas do cavalo
    return contador;
};

// Função totalizarApostas
const totalizarApostas = (num) => {
    let total = 0;
    for (const aposta of apostas) {
        if (aposta.cavalo === num) {
            // Soma o valor das apostas
            total += aposta.valor;
        }
    }
    // Retorna a soma dos valores apostados em numCavalo
    return total;
};

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados do form
    const cavalo = Number(frm.inCavalo.value);
    const valor = Number(frm.inAposta.value);

    // Adicina os atributos (cavalo e aposta) ao vetor de objetos
    apostas.push({ cavalo, valor });

    // Inicializa a variável para exibir as apostas realizadas
    let lista = `Apostas Realizadas\n${"-".repeat(25)}\n`;

    // Percorre o vetor e concatena em lista as apostas realizadas
    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$${aposta.valor.toFixed(2)}\n`;
    }

    // Exibe a lista das apostas
    respLista.innerText = lista;

    // Limpa o campo e posiciona o cursos
    frm.reset();
    frm.inCavalo.focus();
});

// Cria "ouvinte" para evento blur
frm.inCavalo.addEventListener("blur", () => {
    // Se n~çao preencheu o campo, limpa respCavalo e retorna
    // (não exibe mensagem de alert,pois pode sair por um clique em Ganhador)
    if (frm.inCavalo.value === "") {
        respCavalo.innerText = "";
        return;
    }

    // Nº do cavalo convertido em Number
    const numCavalo = Number(frm.inCavalo.value);
    
    if (!validarCavalo(numCavalo)) {
        alert("Nº do cavalo inválido");
        frm.inCavalo.focus();
        return;
    }

    // Atribui o retorna da função as variáveis
    const nome = obterCavalo(numCavalo);
    const contaNum = contarApostas(numCavalo);
    const total= totalizarApostas(numCavalo);

    // Exive nome, nº de apostas e total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$${total.toFixed(2)})`;
});

// Cria "ouvinte" para evento focus
frm.inCavalo.addEventListener("focus", () => {
    //Quando o campo recebe o foco, limpa o contéudo e dados do cavalo
    frm.inCavalo.value = "";
    respCavalo.innerText = "";
});

// Cria "ouvinte" para evento click do btResumo
frm.btResumo.addEventListener("click", () => {
    // Vetor com valores zerados para cada cavalo
    const somaApostas = [0, 0, 0, 0, 0, 0];

    // Percorre apostas e acumula na posição do cavalo apostado (-1, inicia em 0)
    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor;
    }

    // Exibe o resultado
    let resposta = `Nº Cavalo.............. R$ Apostado\n${"-".repeat(35)}\n`;
    CAVALOS.forEach((cavalo, i) => {
        resposta +=`${i + 1} ${cavalo.padEnd(20)}`;
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
    });
    
    // Exibe a resposta
    respLista.innerText = resposta;
});

// Cria "ouvinte" para evento click do btGanhador
frm.btGanhador.addEventListener("click", () => {
    // Solicita o Número do cavalo ganhador
    //const ganhador = Number(prompt("Nº Cavalo Ganhador"));

    // Gera o ganhador aleatóriamente
    const ganhador = Math.floor(Math.random() * 6) + 1;

    // Para validar o preenchimento do prompt anterior
    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo Inválido");
        return;
    } else if (apostas.length === 0) {
        alert("Não houve nenhum aposta!");
        return;
    }

    // Usa o método reduce para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    // Concatena em resumo o resultado a ser exibido na página
    let resumo = `Resultado Final do Páreo\n${'-'.repeat(30)}\n`;

    resumo += `Nº Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral: R$${total.toFixed(2)}\n\n`;
    resumo += `Ganhador nº ${ganhador} = ${obterCavalo(ganhador)}\n\n`;
    resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`;
    resumo += `Total Apostado: R$${totalizarApostas(ganhador).toFixed(2)}`;

    // Exive o resultado
    respLista.innerText = resumo;

    // Desabilita os botões apostar e ganhador
    frm.btApostar.disabled = true;
    frm.btGanhador.disabled = true;

    // Foca no botão "Novo Páreo"0
    frm.btNovo.focus(); 
});

// Cria "ouvinte" para evento click do btNovo
// Recarrega a página
frm.btNovo.addEventListener("click", () => window.location.reload());
