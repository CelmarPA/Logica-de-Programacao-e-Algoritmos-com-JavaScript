/**
 * b) Elaborar um programa que leia a altura de uma árvore (número 
 * de linhas) e após exiba a árvore iniciando com 2 estrelas 
 * (asteriscos) e aumentando em 2 a cada linha. Fazer com que a 
 * árvore tenha uma margem esquerda fixa de 30 espaços e fique 
 * centralizada, conforme ilustra a execução do programa a seguir:
 * 
 *      Altura da Árvore: 8
 *                                  **
 *                                 ****
 *                                ******
 *                               ********
 *                              **********
 *                             ************
 *                            **************
 *                           ****************
 */

// Adiciona pacote prompt-sync
const prompt = require("prompt-sync")();

// Obtém altura da árvore
const altura = Number(prompt("Altura da Árvore: "));

console.log();

// Loop for para montagem da árvore
for (let i = 1; i <= altura; i++) {
    const espacos = 30 + (altura - i) // calcula espaços do início
    console.log(" ".repeat(espacos) + "*".repeat(i * 2)); // cria a árvore
}

// Colocar um tronco com 2 estrelas por linha e com um comprimento que tenha relação com a altura da árvore.
for (i = 1; i <= altura / 2; i++) {
    const espacos = 30 + (altura - 1);
    console.log(" ".repeat(espacos) + "*".repeat(2));
}
