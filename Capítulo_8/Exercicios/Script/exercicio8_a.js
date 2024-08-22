// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");


// Função retornarTracos()
const retornarTracos = (nome) => {
    // Divide o nome em  partes 
    const partes = nome.split(" ");

    // Inicializa a váriavel tracos que ira receber os traços
    let tracos = "";

    for (const parte of partes) {
        for (let i = 0; i < parte.length; i++) { // Adiciona os traços apenas sobre o nome
            tracos += "-";
        }
        tracos += " ";
    }

    return tracos;
}

// Função categorizarAluno()
const categorizarAluno = (idade) => idade <= 12 ? "Infantil" : idade <= 18 ? "Juvenil" : "Adulto";

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém nome e idade do atleta
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    // Chama as funções e atribui
    const sublinhado = retornarTracos(nome);
    const classe = categorizarAluno(idade);

    // Exibe o resultado
    resp.innerText = `${nome}\n${sublinhado}\nCategoria: ${classe}`;
});
