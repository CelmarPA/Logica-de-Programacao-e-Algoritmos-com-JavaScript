// Obtém os elementos da página
const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

// Função criarMoedas
const criarMoedas = (num, moeda, textAlt, classe) => {
    // Cria laço de repetição para inserir várias imagens de moedas na página
    for (let i = 1; i <= num; i++) {
        // Cria o elemento img
        const novaMoeda = document.createElement("img");
        // Atributo src
        novaMoeda.src = "Image/" + moeda;
        // Texto alternativo
        novaMoeda.textAlt = textAlt;
        // Classe da moeda (css)
        novaMoeda.className = classe;
        // Hierarquia DOM
        dvMoedas.appendChild(novaMoeda);
    }
    // Cria uma quebra de linha (br)
    const br = document.createElement("br");
    dvMoedas.appendChild(br);
};

// Cria "ouvinte" para evendo load da página
window.addEventListener("load", () => {
    // Gera números aleátorios, entre 1 e 5, para cada moeda
    const num0_10 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num1_00 = Math.ceil(Math.random() * 5);

    // Define texto alternativo para as imagens para acessibilidade
    const alt0_10 = "Moedas de Dez Centavos";
    const alt0_25 = "Moedas de Vinte e Cinto Centavos";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt1_00 = "Moedas de Um Real";

    // Chama o método (função) criarMoedas passando os argumentos
    // Número aleátorio para moeda, nome do arquivo de imagem, texto alternativo  e classe da moeda
    criarMoedas(num0_10, "moeda010.jpg", alt0_10, "moeda0-10");
    criarMoedas(num0_25, "moeda025.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_50, "moeda050.jpg", alt0_50, "moeda0-50");
    criarMoedas(num1_00, "moeda100.jpg", alt1_00, "moeda1-00");
});

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o valor informado pelo usuário
    const soma = Number(frm.inSoma.value.replace(",", "."));
    
    // Obtém img filhas de dvMoedas
    const moedas = dvMoedas.querySelectorAll("img");

    // Declara e inicializa o acumulador
    let totalMoedas = 0;

    // Percorre as tags img (em moedas) e verifica propriedade className
    for (const moeda of moedas) {
        if (moeda.className === "moeda0-10") {
            totalMoedas += 0.10; // acumula 0.10 (moedas de 0,10)
        } else if (moeda.className === "moeda0-25") {
            totalMoedas += 0.25; // acumula 0.25 (moedas de 0,25)
        } else if (moeda.className === "moeda0-50") {
            totalMoedas += 0.50; // acumula 0.50 (moedas de 0,50)
        } else {
            totalMoedas += 1.00; // acumula 1.00 (moedas de 1,00)
        }
    }

    // Cria elemento div
    const div = document.createElement("div");

    // Cria elemento h3
    const h3 = document.createElement("h3");

    // Declara variável mensagem
    let mensagem;

    // Verifica se o valor informado é igual ao total de Moedas exibido
    if (soma == totalMoedas.toFixed(2)) {
        // Defina a classe para div
        div.className = "alert alert-success";

        // Define a mensagem a ser exibida
        mensagem = `Parabéns! Você acertou!`;
    } else {
        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta certa é ${totalMoedas.toFixed(2)}`;
    }

    // Cria elemento texto
    const texto = document.createTextNode(mensagem);

    // Define texto como filho de h3
    h3.appendChild(texto);

    // h3 é filho da div criada na função
    div.appendChild(h3);
    
    // E a div com alerta é filha da divMoedas
    dvMoedas.appendChild(div);

    // Desabilita botão (resposta já foi exibida)
    frm.submit.disable = true;
});

// Cria "ouvinte" para evento reset
frm.addEventListener("reset", () => {
    // Recarrega a página
    window.location.reload();
});
