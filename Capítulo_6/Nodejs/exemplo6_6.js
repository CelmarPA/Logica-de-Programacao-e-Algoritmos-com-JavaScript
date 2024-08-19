/**
 * b) Elaborar um programa que leia nome e idade de ‘n’ clientes de um
 * banco (até ser digitado ‘Fim’ no nome). Após, classifique e exiba os
 * clientes em 2 grupos: preferencial (a partir de 60 anos) e Fila
 * normal (até 59 anos). Informe a ordem de atendimento em cada grupo de
 * acordo com a chegada dos clientes.
 */

// Adiciona pacote prompt-sync
const prompt = require("prompt-sync")();

// Mensagem para usuário
console.log(
    "Informe os clientes em ordem de chegada ou 'Fim' no nome para sair"
);

// Declara o array clientes
const clientes = [];

do {
    // Lê o nome
    const nome = prompt("Nome: ");

    // Verifica se o cliente quer sair
    if (nome === "Fim") {
        break;
    }

    // Lê a idade
    const idade = Number(prompt("Idade: "));

    // Adiciona ao array
    clientes.push({ nome, idade });
    console.log("Ok! Cliente inserido na fila...");
} while (true);

console.log(`\nFila Preferencial`);
console.log("-".repeat(40));

const filaPref = clientes.filter((cliente) => cliente.idade >= 60);

filaPref.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});

console.log("\nFila Normal");
console.log("-".repeat(40));

const filaNormal = clientes.filter((cliente) => cliente.idade < 60);

filaNormal.forEach((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});
