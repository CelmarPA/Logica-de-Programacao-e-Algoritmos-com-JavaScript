// Código JavaScript do programa Situação do Aluno

// Cria referência ao form e aos elemento h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// Cria um "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    // Obtém os calores do form
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    // Calcula a média
    const media = (nota1 + nota2) / 2;

    // Exibe as respostas
    resp1.innerText = `Média das Notas ${media.toFixed(2)}`;

    // Condição para avaliar a situação do Aluno
    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
        resp2.style.color = "blue";
    } else if (media >= 4) {
        resp2.innerText = `Atenção ${nome}. Você está em exame`;
        resp2.style.color = "green";
    } else {
        resp2.innerText = `Ops ${nome}... Você foi reprovado(a)`;
        resp2.style.color = "red";
    }

    e.preventDefault() // Evita o envio de form
});
