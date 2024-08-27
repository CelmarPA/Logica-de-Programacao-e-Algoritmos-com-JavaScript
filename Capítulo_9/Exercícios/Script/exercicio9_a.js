// Obtém os elementos da página
const frm = document.querySelector("form");
const imCluble = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#divTitulo");
const limpar = document.querySelector("#btLimpar");

// Captura tags input da página
const inRadios = document.querySelectorAll("input");

// Função contagemVisitas
const contarVisitas = () => {
    if (!localStorage.getItem("visita")) {
        alert(`Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.`);
        // // Inicializa a variável count como 1
        count = 1;
        // E armazena esse valor no localStorage
        localStorage.setItem("visita", count);
    } else {
        // Obtém o conteúdo do localStorage
        let visita = Number(localStorage.getItem("visita"));

        // Incrementa visita
        visita += 1
        // Exibe a mensagem com visita + 1
        alert(`Que bom que você voltou! Esta é a sua visita de número ${visita} ao nosso site.`)

        // Armazena novamente a novo valor
        localStorage.setItem("visita", visita);
    }
};

// Função trocarClube()
const trocarClube = () => {
    // Declara array com lista de clubes
    let clubes = ["Brasil", "Pelotas", "Farroupilha"];

    // Declara a variável selecao
    let selecao;

    // Percorre os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i; // Se selecionado armazena o índice
            break; // sai da repetição
        }
    }

    if (selecao <= 2) {
        // Se selecao for <= 2 torce por algum clube
        // Modifica a cor
        dvTitulo.className = `row cores-${clubes[selecao]}`;
        // Muda a propriesda src com a imagem do clube
        imCluble.src = `Image/${clubes[selecao].toLocaleLowerCase()}.png`;
        // Muda o estido para exibir a imagem
        imCluble.className = "img-fluid";
        // Altera texto alternativo
        imCluble.alt = `Símbolo do ${clubes[selecao]}`;
        // Salva no localStore o nome do clube
        localStorage.setItem("clube", clubes[selecao]);
    } else {
        // Nenhum clube selecionado
        // Remove a classe de cor de divTitulo
        dvTitulo.className = "row";
        // Oculta a imagem
        imCluble.classList = "d-none";
        // Limpa texto alternativo
        imCluble.alt = "";
        // Remove variável do localStorage
        localStorage.removeItem("clube");
    }
};

// Função verificarClube()
const verificarClube = () => {
    // Verifica se já tem algum clube salvo
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        // De acordo com clube marca checked
        if (clube === "Brasil") {
            inRadios[0].checked = true;
        } else if (clube === "Pelotas") {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        }
        // Chama a função para trocar a imagem e a cores
        trocarClube();
    }

    // Chama a função contarVisitas
    contarVisitas();
};

// Percorre os elementos para associar function ao evendo  change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

// Ao carregar a página, verifica se cliente já selecionou um clube anteriormente e verifica as visitas
window.addEventListener("load", verificarClube);
