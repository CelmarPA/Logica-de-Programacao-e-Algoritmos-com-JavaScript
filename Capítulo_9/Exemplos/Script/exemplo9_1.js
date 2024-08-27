// Obtém os elementos da página
const frm = document.querySelector("form");
const imCluble = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const limpar = document.querySelector("#btLimpar");

// Função trocarClube()
const trocarClube = () => {
    // Declara variável clube
    let clube;

    // Verifica se radiobutton está selecionado
    if (frm.rbBrasil.checked) {
        clube = "Brasil";
    } else if (frm.rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    }

    // Define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clube}`;

    // Modifica a imagem de acordo com a seleção do cliente
    imCluble.src = `Image/${clube.toLocaleLowerCase()}.png`;

    // Muda o estilo para exibir a imagem
    imCluble.className = "img-fluid";

    // Modifica atribuito alt
    imCluble.alt = `Símbolo do ${clube}`;

    // Salva no navegador a escolha do cliente
    localStorage.setItem("clube", clube);
};

// Função verificarClube()
const verificarClube = () => {
    // Verifica se já tem algum clube salvo
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        // De acordo com clube marca checked
        if (clube === "Brasil") {
            frm.rbBrasil.checked = true;
        } else if (clube === "Pelotas") {
            frm.rbPelotas.checked = true;
        } else {
            frm.rbFarroupilha.checked = true;
        }
        // Chama a função para trocar a imagem e a cores
        trocarClube();
    }
};

// Adiciona "ouvinte" para o evento de click do btLimpar
limpar.addEventListener("click", () => {
    // Limpa o localStorage
    localStorage.removeItem("clube");

    frm.rbBrasil.checked = false;
    frm.rbPelotas.checked = false;
    frm.rbFarroupilha.checked = false;

    window.location.reload();
});

// Associa ao evento change de cada botão do form a função trocarClube
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube);

// Ao carregar a página, verifica se cliente já selecionou um clube anteriormente
window.addEventListener("load", verificarClube);
