// Obtém elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Inicializa array global para itens
const itens = [];

// Cria "ouvinte" para evento click rbPizza (radio button)
frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"; // Oculta select das bebidas
    frm.inPizza.className = "exibe"; // Exibe select das pizzas
});

// Cria "ouvinte" para evento click rbBebida (radio button)
frm.rbBebida.addEventListener("click", () => {
    frm.inPizza.className = "oculta";
    frm.inBebida.className = "exibe"; // Exibe select das bebidas
     // Oculta select das pizzas
});

// Cria "ouvinte" para evento focus inDetalhes
frm.inDetalhes.addEventListener("focus", () => {
    if(frm.rbPizza.checked) {  // Se rbPizza estiver marcado
        const pizza = frm.inPizza.value; // Obtém conteúdo do item selecionado
        // Operador ternário para definar quantidade de sabores pelos tamanhos
        const num = pizza === "media" ? 2 : pizza === "grande" ? 3 : 4;
        // O placeholder exibe um dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
});

// Quando o campo perde o foco o dica é removida
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = "";
});

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Declara a variável produto
    let produto;

    // Verifica se rbPizza está marcado
    if (frm.rbPizza.checked) {
        // Obtém o número do item selecionado
        const num = frm.inPizza.selectedIndex;
        // Obtém o texto do item selecionado
        produto = frm.inPizza.options[num].text;
    } else {
        const num = frm.inBebida.selectedIndex;
        produto = frm.inBebida.options[num].text;
    }

    // Obtém o conteúdo de inDetalhes
    const detalhes = frm.inDetalhes.value;

    // Adiciona ao array
    itens.push(produto + " (" + detalhes + ")");

    // Exibe o resultado
    resp.innerText = itens.join("\n");

    // Limpa o campo do form
    frm.reset();

    // Dipara click em rbPizza
    frm.rbPizza.dispatchEvent(new Event("click"));
});
