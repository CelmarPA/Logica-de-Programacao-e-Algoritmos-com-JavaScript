/**
 * a) Elaborar um programa para uma empresa que leia o salário e o tempo
 * que um funcionário trabalha na empresa. Sabendo que a cada 4 anos
 * (quadriênio) o funcionário recebe um acréscimo de 1% no salário,
 * calcule e informe o número de quadriênios a que o funcionário tem 
 * direito e o salário final.
 */

// Código JavaScript do programa Quadriênios
const prompt = require("prompt-sync")(); // Adiciona pacotes de entrada

const salario = Number(prompt("Salário: R$")); // Obtém os dados de entrada

// Calcula o novo salário e quadriênios
const tempo = Number(prompt("Tempo de Trabalho (anos): "));
const quadrienios = Math.floor(tempo / 4);
const acrescimo = salario * quadrienios/ 100;
const novoSalario = salario + acrescimo;

// Exibe o Resultado
console.log(`Quadriênios: ${quadrienios}`);
console.log(`Salário Final: R$${novoSalario.toFixed(2)}`);
