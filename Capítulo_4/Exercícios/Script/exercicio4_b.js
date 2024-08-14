// Cria referência aos elementos form e h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" de evendo submit
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evite o envio do form

    // Obtém as velocidades
    const velPerm = Number(frm.inVelPerm.value);
    const velCond = Number(frm.inVelCond.value);

    // Verifica se a condição para multa
    let situacao;
    if (velCond <= velPerm) {
        situacao = `Sem Multa`;
    } else if (velCond <= (velPerm * 1.20)) {
        situacao = `Multa Leve`;
    } else {
        situacao = `Multa Grave`;
    }

    // Exibe a resultado
    resp.innerText = `Situação: ${situacao}`;
});
