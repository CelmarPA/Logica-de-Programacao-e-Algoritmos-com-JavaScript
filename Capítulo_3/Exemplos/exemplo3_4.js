/**
 * b) Elaborar um programa para uma veterinária, que leia o peso de uma 
 * ração em kg e o quanto um gato consome por dia da ração, em gramas. 
 * Informe quantos dias irá durar a ração e o quanto sobra da ração 
 * (em gramas).
 */

// Código JavaScript do programa Veterinária
const prompt = require("prompt-sync")(); // Adiciona o pacote de entrada

// Lê a entrada de dados
const pesoKg = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo Diário (gr): "));

// Calcula o peso em gramas, a duração e sobra
const pesoGr = pesoKg * 1000;
const duracao = Math.floor(pesoGr / consumo);
const sobra = pesoGr % consumo;

// Exibe o resultado
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra} gramas`);
