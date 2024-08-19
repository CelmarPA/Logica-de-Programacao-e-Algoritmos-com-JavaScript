/**
 * c) Elaborar um programa que simule saques em um caixa eletrônico de um
 * banco. Ler o valor solicitado por clientes até ser digitado 0. 
 * Sabendo que o caixa dispõe apenas de notas de 10, exiba após cada 
 * leitura se o saque é válido ou inválido. Ao final, listar os saques 
 * válidos e a soma dos saques. Exiba também o número de saques 
 * inválidos.
 */

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

console.log("Informe o valor dos saques ou 0 para sair");

// Declara o array saques
const saques = [];

do {
    // Obtém o valor
    const valor = Number(prompt("Saque: R$"));

    // Verifica se o cliente quer sair
    if (valor === 0) {
        break;
    }

    saques.push(valor) // Adiciona no array saques

    if (valor % 10 === 0) {
        console.log("Saque realizado com sucesso!");
    } else {
        console.log("Erro... Valor inválido (deve ser múltiplo de 10)")
    }
} while (true);

console.log("\nSaques Válidos:");
console.log("-".repeat(40));

const saquesValidos = saques.filter(saque => saque % 10 == 0);
for (const saque of saquesValidos) {
    console.log(saque.toFixed(2));
}

console.log("-".repeat(40));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos Saques: R$${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`\nNº de Tentativas de Saques (saques inválidos): ${saquesInvalidos}`);
