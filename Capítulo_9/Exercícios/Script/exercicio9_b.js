// Obtém os elementos da página
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// Função produtoLista
const produtoLista = (produto) => {
    // Obtém seu contéudo e a string é dividida em itens de vetor a cada ";"
    if (localStorage.getItem("produto")) {
        const produtos = localStorage.getItem("produto").split(";");

        // retorna true
        return produtos.includes(produto);
    } else {
        return false;
    }
};

// Função mostrarProdutos
const mostrarProdutos = () => {
    // Se não houver produtos em localStorage
    if (!localStorage.getItem("produto")) {
        // Limpa o campo pre
        respLista.innerText = "";
        return;
    }

    // Otbém os conteúdo do localStorage
    const produtos = localStorage.getItem("produto").split(";");

    // Cria copia do vetor produtos
    const copiaProdutos = [...produtos];

    // Organiza a copia em ordem alfabetica
    copiaProdutos.sort();

    // Inicializa o acumulado para exibir as linhas da lista
    let linhas = "Produtos adicionados\n" + "-".repeat(40) + "\n";

    // Faz um loop para concatenar as linhas
    for (let i = 0; i < produtos.length; i++) {
        linhas += `${copiaProdutos[i]}\n`;
    }

    // Exite a lista
    respLista.innerText = linhas;
}

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    // Obtém o produto
    const produto = frm.inProduto.value;

    // Verifica se o produto já está listado
    if (produtoLista(produto)) {
        alert(`Você já adicionou ${produto} na lista.`)
        // Limpa campo do form e foca
        frm.inProduto.value = "";
        frm.inProduto.focus();
        return;
    }

    // Se houver dados em localStore
    if (localStorage.getItem("produto")) {
        // Obtém o contéudo salvo e acrescenta ";" mais o novo produto
        const produtoNovo = localStorage.getItem("produto") + ";" + produto;

        // Salva os dadoso
        localStorage.setItem("produto", produtoNovo);
    } else {
        // Se não apenas salva sem ";"
        localStorage.setItem("produto", produto);
    }

    // Chama a função para listar os produtos
    mostrarProdutos();

    // Limpa os campos do form e foca no campo
    frm.inProduto.value = ""
    frm.inProduto.focus();
});

// Cria "ouvinte" para o evento click do btLimpar
frm.btLimpar.addEventListener("click", () => {
    // Verfica se a lista já está vazia
    if (!localStorage.getItem("produto")) {
        alert("Lista Vazia!");
        frm.inProduto.focus();
        return;
    }

    // Limpa os dados do localStorage
    localStorage.removeItem("produto");

    // Limpa o campo da lista
    respLista.innerText = "";

    // Foca no campo inProduto
    frm.inProduto.focus();
});

// Chama função para mostrar a lista quando a página for carregada
window.addEventListener("load", mostrarProdutos);
