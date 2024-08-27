// Código JavaScript do Programa Cadastro de Vinhos

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

// Inicializa o array vinhos
const vinhos = [];

// Função para exibir titulo
function titulo(text) {
    console.log();
    console.log(text);
    console.log("=".repeat(40));
}

// Função incluir()
function incluir() {
    titulo("===<Inclusão de Vinhos>===");

    // Lê os dados de entrada
    const marca = prompt("Marca...: ");
    const tipo = prompt("Tipo....: ");
    const preco = Number(prompt("Preço: R$"));

    // Adiciona ao array
    vinhos.push({ marca, tipo, preco });
    console.log("Ok! Vinho cadastrado com sucesso!");
}

// Função listar()
function listar() {
    titulo("===>Lista de Vinhos Cadastrados<===");

    console.log("Marca............... Tipo................ Preço: R$");

    // Percorre o array para exibir a lista de vinhos
    for (const vinho of vinhos) {
        console.log(
            `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +
                `${vinho.preco.toFixed(2).padStart(9)}`
        );
    }
}

// Função pesquisar()
function pesquisar() {
    titulo("===>Pesquisa por Tipo de Vinho<===");

    // Obtém o tipo
    const pesq = prompt("Tipo: ");

    // Inicialixa contador para verificar se existe
    let contador = 0;

    console.log("Marca............... Tipo................ Preço: R$");

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(
                `${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` +
                    `${vinho.preco.toFixed(2).padStart(9)}`
            );
            contador++; // Se tipo encontrado, incrementa o contador
        }
    }

    // Verifica se o contador está zerado se sim exibe a mensagem
    if (contador === 0) {
        console.log(`Obs.: Não há vinhos cadastrados do tipo "${pesq}"`);
    }
}

// Função calcularMedia()
function calcularMedia() {
    titulo("===>Média e Destaques do Cadastro de Vinhos<===");

    // Obtém a quantidade de vinhos no array
    const num = vinhos.length;

    if (num === 0) {
        console.log(`Obs: Não há vinhos cadastrados.`);
        return;
    }

    // Inicializa a variável total
    let total = 0;

    // Calcula o total
    for (const vinho of vinhos) {
        total += vinho.preco;
    }

    // Calcula a média de preços
    const media = total / num;

    // Cria uma cópia do array vinhos
    const copiaVinhos = [...vinhos];

    // Ordena o array copiaVinhos por preços
    copiaVinhos.sort((a, b) => a.preco - b.preco);

    // Obtém os vinhos de menor e maior valor
    const menor = copiaVinhos[0];
    const maior = copiaVinhos[num - 1];

    console.log(`Preço Médio dos Vinhos: R$${media.toFixed(2)}`);
    console.log(`Menor Valor: R$${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`Maior Valor: R$${maior.preco.toFixed(2)} - ${maior.marca}`);
}

// Programa Principal
do {
    titulo("===<Cadastro de Vinhos>===");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por Tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");
    const opcao = Number(prompt("Opção: "));
    if (opcao === 1) {
        incluir();
    } else if (opcao === 2) {
        listar();
    } else if (opcao === 3) {
        pesquisar();
    } else if (opcao === 4) {
        calcularMedia();
    } else if (opcao === 5) {
        break;
    } else {
        console.log("Erro... Informe uma opção válida!");
    }
} while (true);
