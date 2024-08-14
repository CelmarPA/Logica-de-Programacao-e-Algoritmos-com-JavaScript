/**
 * b) Uma farmácia necessita de um programa que leia o total de uma
 * compra. Exiba como resposta o nº máximo de vezes que o cliente pode
 * parcelar essa compra e o valor de cada parcela. Considere as seguintes
 * condições: a) cada parcela deve ser de, no mínimo, R$ 20,00; b) o
 * número máximo de parcelas permitido é 6.
 */

const prompt = require("prompt-sync")(); // Adiciona o pacote prompt-sync
const valor = Number(prompt("Valor da Compra: R$")); // Lê o valor da compra

// aux = nº de parcelas
const aux = Math.floor(valor / 20); 

// Operador ternário
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux // Operador ternário
// Mesmo que:
// let parcelas;
// if (aux === 0) {
//     parcelas = 1;
// } else if (aux > 6) {
//     parcelas = 6;
// } else {
//     parcelas = aux;
// }

// Calcula o valor da parcela
const valorParcela = valor / parcelas; // Calcula o valor da parcela

// Exibe o resultado
console.log(`Pode pagar em ${parcelas}x de R$${valorParcela.toFixed(2)}`);
