/**
 * a) Elaborar um programa que leia uma fórmula matemática e
 * analise se os parênteses utilizados na fórmula estão corretos.
 * A análise deve considerar dois fatores: o número de “(“ deve
 * ser igual ao número de “)” e, ao ler a fórmula da esquerda para
 * a direita, em nenhum momento, o número de “)” pode ser maior
 * que o número de “(”, ou seja, não pode fechar um parêntese sem
 * antes ter aberto.
 */

// Adiciona pacote prompt-sync
const prompt = require("prompt-sync")();

// Obtém a formula
const formula = prompt("Fórmula: ");

let abre = 0;
let fecha = 0;

// Analisa faz a contagem dos parenteses
for (const parentese of formula) {
    if (parentese === "(") {
        abre++;
    } else if (parentese === ")") {
        fecha++;
    }

    // Se a quantidade de ")" for maior que "("
    if (fecha > abre) {
        break;
    }
}

if (abre === fecha) {
    console.log("Ok! Fómula correta (quantidade de parences certa).");
} else {
    console.log("Erro.. Fórmula incorreta.");
}
