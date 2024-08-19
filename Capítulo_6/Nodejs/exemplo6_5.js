/**
 * a) Elaborar um programa que leia nome e nota de ‘n’ alunos até o 
 * usuário digitar ‘Fim’ no nome. Após, verifique e exiba a maior nota 
 * da turma. Se a maior nota for superior ou igual a 7, exiba os alunos 
 * que a obtiveram. Caso contrário, exiba a mensagem “Não há alunos em 
 * destaque na turma”.
 */

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

// Mensagem de aviso
console.log("Informe os alunos. Após, digite 'Fim' para sair.")

// Declara array global
const alunos = [];

do {
    // Obtém o nome e a nota
    const nome = prompt("Nome: ");

    // Verifica se o usuário não deseja sair
    if (nome == "Fim") {
        break;
    }

    // Lê a nota do aluno
    const nota = Number(prompt("Nota: "));

    // Adiciona no final do array
    alunos.push({ nome, nota });
    console.log("Ok! Aluno(a) cadastrado(a)...");
} while (true);

console.log("-".repeat(40));

// Obtém a maior nota da turma
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);

console.log(`Maior Nota: ${maior}`);

// Veerifica se tem destaques na turma

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota >= maior); // Filtro
    if (destaques.length > 0) {
        for (const destaque of destaques) {
            console.log(` - ${destaque.nome}`);
        }
    }    
} else {
    console.log("Não há alunos em destaque na turma.");
}

