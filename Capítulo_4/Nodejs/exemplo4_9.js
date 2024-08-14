/**
 * c) Elaborar um programa que leia um número – que deve ser uma centena.
 * Calcule e exiba a centena invertida. Caso o número não seja uma
 * centena, exiba mensagem.
 */

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

// Lê o número
const numero = Number(prompt("Digite um Número (centena): "));

// Condição que verifica se o número é uma centena
if (numero < 100 || numero >= 1000) {
    console.log("Erro.. número deve ser uma centena!");
    return;
}

const num1 = Math.floor(numero / 100) // Obtém o primeiro número
const sobra = numero % 100; // Calcula o que sobra (dezena)
const num2 = Math.floor(sobra / 10) // Obtém o segundo número
const num3 = sobra % 10; // Obtém terceiro número (unidade)

// Exibe o resultado
console.log(`Número invertido: ${num3}${num2}${num1}`);
