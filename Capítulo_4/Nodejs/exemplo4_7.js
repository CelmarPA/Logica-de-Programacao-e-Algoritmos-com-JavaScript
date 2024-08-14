/**
 * a) A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada
 * pessoa tem direito a levar um peixe. Peixes extras custam 12,00. 
 * Elabore um programa que leia o número de pessoas de uma família que 
 * foram ao clube e o número de peixes obtidos na pescaria. Informe o 
 * valor a pagar.
 */

const prompt = require("prompt-sync")(); // Adiciona o pacote prompt-sync
const pessoas = Number(prompt("Nº de Pessoas: ")); // Lê a entrada de dados
const peixes = Number(prompt("Nº de Peixes: "))

// Calcula o valor a pagar
let pagar; // Declara a variável pagar
if (peixes <= pessoas) { // Condição para pagamento
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`Valor a Pagar: R$${pagar.toFixed(2)}`); // Exibe o resultado
