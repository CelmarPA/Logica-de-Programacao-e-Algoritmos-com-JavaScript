// Obtém os elementos da página
const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']"); // cria referência ao checkbox

// Função montarTabela
const montarTabela = () => {
    // Se houver dados salvos em localStorage
    if (localStorage.getItem("jogoPalavra")) {
        // Obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        const palavras = localStorage.getItem("jogoPalavra").split(";");
        const dicas = localStorage.getItem("jogoDica").split(";");

        // Percorre os elementos do vetor e os insere na tabela
        for (let i = 0; i < palavras.length; i++) {
            // Adiciona uma linha na tabela
            const linha = tbPalavras.insertRow(-1);

            // Cria as colunas na tabela
            const col1 = linha.insertCell(0);
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            // Coloca o conteúdo em cada célula
            col1.innerText = palavras[i];
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

// Cria "ouvinte" para quando checkbox é alterado. Exibe a lista se marcado, senão, recarrega
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload();
});

// Cria "ouvinte" para evento click na tbPalavra
tbPalavras.addEventListener("click", (e) => {
    // Se a classe do elemento alvo clicado contém exclui
    if (e.target.classList.contains("exclui")) {
        // Acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirmar Exclusão da Palavra: "${palavra}"?`)) {
            // Remove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            // Exclui os dados do localStorage
            localStorage.removeItem("jogoPalavra");
            localStorage.removeItem("jogoDica");

            const palavras = [];
            const dicas = [];

            // Obtém os dados da tabela, acrescentando-os aos vetores
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // Salva o conteúdo dos vetores em localStorage (sem a linha removioda)
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});
