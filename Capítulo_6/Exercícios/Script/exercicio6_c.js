// Obtém os elementos da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Declara array de candidatos
const candidatos = [];

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados de entrada
    const nome = frm.inCandidato.value;
    const acertos = Number(frm.inAcertos.value);

    // Adicionar ao array
    candidatos.push({ nome, acertos });

    // Limpa campo e foca
    frm.reset();
    frm.inCandidato.focus();

    frm.btListar.dispatchEvent(new Event("click"));
});

// Cria "ouvinte" para evento click do btListar
frm.btListar.addEventListener("click", () => {
    // Verifica se há candidatos cadastrados
    if (candidatos.length === 0) {
        alert("Não há candidatos cadastrados!");
        frm.inCandidato.focus();
        return;
    }

    // Declara variável lista
    let lista = "";

    // Preenche lista com candidatos
    for (const candidato of candidatos) {
        lista += `${candidato.nome} - ${candidato.acertos} acertos\n`;
    }

    resp.innerText = "";
    // Exibe a lista
    resp.innerText = lista;
});

// Cria "ouvinte" para evento click do btAprovados
frm.btAprovados.addEventListener("click", () => {
    // Verifica se há candidatos cadastrados
    if (candidatos.length === 0) {
        alert("Não há candidatos cadastrados!");
        frm.inCandidato.focus();
        return;
    }

    // Solicita valors dos pontos para aprovação
    let acertos = Number(prompt("Número de Acertos para Aprovação?"));

    // Verifica se valor é válido
    do {        
        console.log(acertos)
        if (isNaN(acertos) || acertos === 0) {
            alert("Valor inválido, por favor informe novamente...")
            acertos = Number(prompt("Número de Acertos para Aprovação?"));
        } else {
            break;
        }

    } while (true);    

    // Cria lista aprovados
    let aprovados = "";

    // Declara variável aux para ordenar os candidatos
    let aux = [...candidatos];
    aux.sort((a, b) => b.acertos - a.acertos);

    // Verifica os aprovados
    aux.forEach((candidato) => {
        if (candidato.acertos >= acertos) {
            aprovados += `${candidato.nome} - ${candidato.acertos} acertos\n`;
        }
    })

    // Exibe a resposta
    if (aprovados.length === 0) {
        resp.innerText = `Não houve aprovados!`
    } else {
        resp.innerText = aprovados;
    }
});
