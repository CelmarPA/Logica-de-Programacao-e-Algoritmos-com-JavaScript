/**
 * Uma senha deva possuir as seguintes regras de composição: 
 * a) possuir entre 8 e 15 caracteres; 
 * b) possuir, no mínimo, 1 número; 
 * c) possuir, no mínimo, 1 letra minúscula; 
 * d) possuir, no mínimo, 2 letras maiúsculas; 
 * e) possuir, no mínimo, 1 símbolo.
 */

// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envido do form

    // Obtém a senha
    const senha = frm.inSenha.value;

    // Vetor com erros
    const erros = [];

    // Verifica se o tamanho da senha é inválido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres");
    }

    // Verifica se não possui números
    if (senha.match(/[0-9]/g) === null) {
        erros.push("possuir números (no mínimo, 1)");
    }

    // Verifica se não possui letras  minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letrar minúsculas (no mínimo, 1)");
    }

    // Verifica se não possui letrar maiúsculas ou se possui apenas 1
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-z]/g).length === 1) {
        erros.push("possuir letrar maiúsculas (no mínimo, 2)");
    }

    // Verifica se não possui símbolos ou "_"
    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    // Se vetor está vazio (significa que não foram encontrados erros)
    if (erros.length === 0) {
        resp.innerText = `Ok! Senha Válida`;
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}`;
    }
});
