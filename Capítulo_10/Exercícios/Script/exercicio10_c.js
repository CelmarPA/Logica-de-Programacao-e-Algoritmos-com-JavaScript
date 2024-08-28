// Obtém elementos da página
const frm = document.querySelector("form");
const dvClubes = document.querySelector("#divClubes");
const dvTabela = document.querySelector("#divTabela");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o nome do clube
    const clube = frm.inClube.value;

    // Cria o elemento h5
    const h5 = document.createElement("h5");

    // Define a classe de h5
    h5.className = "alinha-direita-italic";

    // Cria o texto para h5
    const texto = document.createTextNode(clube);

    // Define texto como filho de h5
    h5.appendChild(texto);

    // Define h5 como filho da divClube
    dvClubes.appendChild(h5);

    // Limpa contéudo do campo e foca
    frm.inClube.value = "";
    frm.inClube.focus();
});

// Cria "ouvinte" para evento click do btMontar
frm.btMontar.addEventListener("click", () => {
    // Obtém todos os elementos h5
    const h5s = document.querySelectorAll("h5");

    // Verifica se a quantidade de tags h5 é par ou ímpar
    if (h5s.length % 2 !== 0) {
        alert("A quantidade de times deve ser par!");
        frm.inClube.focus();
        return;
    }

    // Cria elemento h3 como título da tabela
    const h3 = document.createElement("h3");

    // Cria o texto
    const texto = document.createTextNode("Tabela de Jogos");

    // Define texto com filho de h3 e h3 como filho de divTabela
    h3.appendChild(texto);
    dvTabela.appendChild(h3);

    // Cria tabela de jogos
    const tabela = document.createElement("table");

    // Define a classe e o style
    tabela.className = "table table-striped";

    // Define tabela com filha de divTabela
    dvTabela.appendChild(tabela);

    // Percorre h5s e cria a tabela
    for (let i = 0; i < h5s.length; i += 2) {
        // Adiciona linha na tabela
        const linha = tabela.insertRow(-1);

        // Cria as colunas na linha
        const col1 = linha.insertCell(0);
        const col2 = linha.insertCell(1);

        // Coloca o conteúdo recuperado de cada h5 em cada célula
        col1.innerText = h5s[i].innerText;
        col2.innerText = h5s[i + 1].innerText;
    }

    // Desabilita os botões Adicionar e Montar Tabela de Jogos
    btAdicionar.disabled = true;
    btMontar.disabled = true;
});

// Cria "ouvinte" para evento reset
frm.addEventListener("reset", () => {
    // Recarrega a pagina
    window.location.reload();
});
