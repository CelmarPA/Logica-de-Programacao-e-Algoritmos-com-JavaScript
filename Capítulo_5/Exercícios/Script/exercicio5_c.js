// Obtém  os elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obté o número
    const num = Number(frm.inNumero.value);

    // Inicializa váriveis resposta, soma e condicao
    let resposta = "";
    let condicao;
    let soma = 0;

    // Define os divisores do número e sua soma
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            if (i === num / 2) {
                resposta += `${i}`
            } else {
                resposta += `${i}, `
            }
            soma += i;            
        }
    }

    // Verifica se é perfeito
    if (soma === num) {
        condicao = "É um Número Perfeito!"
    } else {
        condicao = "Não é um Número Perfeito."
    }

    // Exibe a resposta
    resp1.innerText = `Divisores do ${num}: ${resposta} (Soma: ${soma})`;
    resp2.innerText = `${num} ${condicao}`
});

// Cria "ouvinte" para o evento reset
frm.addEventListener("reset", (e) => {
    // Limpas os campos do form e resposta
    frm.inNumero.value = "";
    frm.inNumero.focus();

    resp1.innerText = "";
    resp2.innerText = "";
});
