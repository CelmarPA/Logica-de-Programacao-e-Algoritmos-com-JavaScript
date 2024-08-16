// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Declara array global
const criancas = [];

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o conteúdo dos campos
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    // Adiciona os dados ao array de objetos
    criancas.push({ nome, idade });

    // Limpa os campos do form
    frm.reset();

    // Posiciona o curso em inNome
    frm.inNome.focus();

    // Dispara o click em btListar
    frm.btListar.dispatchEvent(new Event("click"));
});

// Cria "ouvinte" para o evento click do btListar
frm.btListar.addEventListener("click", () => {
    // Verifica se há nomes na lista
    if (criancas.length === 0) {
        alert("Não há crianças na lista!");
        return;
    }

    // Cria cópia do vetor crianca
    let lista = "";

    for (const crianca of criancas) {
        const { nome, idade } = crianca; // desestrutura o objeto
        lista += nome + " - " + idade + " anos\n";
    }

    // Exibe a lista
    resp.innerText = lista;
});

// Cria "ouvinte" para o evento click do btResumir
frm.btResumir.addEventListener("click", () => {
    // Verifica se há nomes na lista
    if (criancas.length === 0) {
        alert("Não há crianças na lista!");
        return;
    }

    // Cria cópia do vetor crianca
    const copia = [...criancas];

    // Ordena pela idade
    copia.sort((a, b) => a.idade - b.idade);

    // Declara variável para concatenar
    let resumo = "";

    // Obtém a menor idade do array ordenado
    let aux = copia[0].idade;

    // Declara um array para os nomes
    let nomes = [];

    for (const crianca of copia) {
        const { nome, idade } = crianca;
        // Se é da mesma idade auxiliar...
        if (idade === aux) {
            nomes.push(nome); // adiciona o vetor nomes
        } else {
            // senão, monta o resumo para cada idade
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";

            aux = idade; // obtém a nova idade na ordem
            nomes = []; // limpa o vetor dos nomes
            nomes.push(nome); // Adicona o primeiro da nova idade
        }
    }

    // Adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " crinça(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    // Exibe a resposta
    resp.innerText = resumo;
});
