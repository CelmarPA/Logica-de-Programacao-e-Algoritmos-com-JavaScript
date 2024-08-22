// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Função validarNome()
const validarNome = (nome) => {
    // Divide o nome em partes 
    const partes = nome.split(" ");

    // Verifica o tamanho do nome e retorna
    return partes.length < 2 ? false : true;
}

// Função obterSobrenome
const obterSobrenome = (nome) => {
    // Divide o nome em partes 
    const partes = nome.split(" ");

    // Retorna sobrenome em minúsculas
    return partes[partes.length - 1].toLowerCase();
}

// Função contarVogais
const contarVogais = (nome) => {
    
    // Inicializa string com vogais
    let vogais = "AEIOU";

    // Inicializa contador de vogais
    let contador = 0;

    for (const letra of nome) {
        if (vogais.includes(letra.toUpperCase())) {
            contador++;
        }
    }
    return contador < 10 ? contador.toString().padStart(2, "0") : contador;    
}

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault()// Evita o envio do form

    // Obtém o nome do aluno
    const nome = frm.inNome.value.trim();

    // Chama e atribui as funções
    const nomeValido = validarNome(nome);
    const sobrenome = obterSobrenome(nome);
    const vogais = contarVogais(nome);

    // Verifica se nome é válido
    if (nomeValido) {
        resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`
        frm.inNome.value = "";
        frm.inNome.focus();
    } else {
        alert("Informe nome completo do aluno!");
        frm.inNome.value = "";
        frm.inNome.focus;
        return;
    }    
});
