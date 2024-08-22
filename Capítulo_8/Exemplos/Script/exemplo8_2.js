// Obtém elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form

    // Obtém entradas de modelo, ano e preço
    const modelo = frm.inModelo.value;
    const ano = Number(frm.inAno.value);
    const preco = Number(frm.inPreco.value);

    // Chama função classificarVeiculo
    const classificacao = classificarVeiculo(ano);

    // Chama função calcularEntrada
    const entrada = calcularEntrada(preco, classificacao);

    // Calcula a parcela
    const parcelas = (preco - entrada) / 10;

    // Exibe as resposta
    resp1.innerText = `${modelo} - ${classificacao}`;
    resp2.innerText = `Entrada: R$${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de: R$${parcelas.toFixed(2)}`;
});

// Função classificarVeiculo recebe o parâmetro ano de fabricação
const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear();

    let classificacao;
    // Condição para verifica se é novo semi ou usado
    if (ano === anoAtual) {
        classificacao = "Novo"
    } else if (ano === anoAtual - 1 || ano === anoAtual - 2) {
        classificacao = "Seminovo"
    } else {
        classificacao = "Usado"
    }

    return classificacao; // Retorna a classficação
}

// Função para calcular a entrada
const calcularEntrada = (preco, classificacao) => classificacao === "Novo" ? preco * 0.50 : preco * 0.30;
