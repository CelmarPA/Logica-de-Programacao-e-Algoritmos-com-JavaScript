// Obtém os elementos da página
const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

// Função inserirLinha()
const inserirLinha = (titulo, genero) => {
    // Adiciona uma linha na tabela
    const linha = tbFilmes.insertRow(-1);

    // Cria colunas na linha inserida
    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    // Joga um conteúdo em cada célula
    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
};

// Função gravarFilme
const gravarFilme = (titulo, genero) => {
    // Caso haja dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        // Obtém os dados e acrescenta ";" e o título/gênero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

        // Grava os dados no localStorage
        localStorage.setItem("filmesTitulo", filmesTitulo);
        localStorage.setItem("filmesGenero", filmesGenero);
    } else {
        // Apenas adiciona ao localStorage, sem o delimitador ";"
        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero);
    }
};

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados do filme a ser adicionado
    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;

    // Chama a função que insere filmes na tabela
    inserirLinha(titulo, genero);

    // Chama a função que grava dados no localStorage
    gravarFilme(titulo, genero);

    // Limpa os campos e foca
    frm.reset();
    frm.inTitulo.focus();
});

// Cria "ouvinte" para evento load da página
window.addEventListener("load", () => {
    // Se houver dados no localStorage
    if (localStorage.getItem("filmesTitulo")) {
        const titulos = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        // Percorre os elementos do vetor e os inserte na tabela
        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }
    }
});

// Cria "ouvinte" para evento click do icone da tbFilmes
tbFilmes.addEventListener("click", (e) => {
    // Se a classe do elemento alvo clicado contem exclui
    if (e.target.classList.contains("exclui")) { 
        // Outra forma: if (e.target.className.includes("exclui"))
        // Acessa o "pai do pai" do elemento alvo,e obtém o texto do 1° filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
            // remove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("filmesTitulo");
            localStorage.removeItem("filmesGenero");

            // Salva novamente (se existir), acessando o conteúdo da tabela
            for (let i = 1; i < tbFilmes.rows.length; i++) {
                // Obtém o conteúdo da tabela (coluna 0: título; coluna 1: gênero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                // Chama gravarFilme com dados da tabela
                gravarFilme(auxTitulo, auxGenero);
            }
        }
    }
});