/**
 * b) Elaborar um programa que leia o nome de um produto e o número de
 * etiquetas a serem impressas desse produto. Exiba as etiquetas com o 
 * nome do produto, com no máximo 2 etiquetas por linha, conforme exemplo 
 * de execução do programa, demonstrado a seguir.
 */

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

// Lê o nome do produto
const produto = prompt("Produto: ");

// Quantidade de etiquetas
const num = Number(prompt("Nº de etiquetas: "));

// Laço de repetição até num / 2 (para imprimir duas etiquetas por linha)
for (let i = 1; i <= num / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`);
}

// se quantidade solicitada de etiquetas for ímpar...
if (num % 2 !== 0) {
    console.log(produto); // imprime mais uma etiqueta
}
