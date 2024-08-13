// Código JavaScript do programa Revenda
const prompt = require("prompt-sync")(); // Adiciona o pacote ao programa
const veiculo = prompt("Veículo: "); // Lê os dados de entrada
const preco =  Number(prompt("Preço: R$"));
const entrada = preco * 0.50; // Calcula a entrada
const parcela = entrada / 12; // Calcula a parcela
console.log(`Promoção: ${veiculo}`); // Exite os resultados
console.log(`Entrada de: R$${entrada.toFixed(2)}`);
console.log(`+12x de R$${parcela.toFixed(2)}`);
