// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evito o envio do form

    // Obtém o número de chincilas e os anos
    const num = Number(frm.inNumero.value);
    const anos = Number(frm.inAnos.value);

    // Verifica se a entrada é válida
    if (num < 2) {
        alert("Quantidade incial deve ser maior que 2!");
        frm.inNumero.value = "";
        frm.inAnos.value = "";
        frm.inNumero.focus();
        return;
    }
    if (anos <= 0) {
        alert("Valor para anos deve ser maior que 0!");
        frm.inNumero.value = "";
        frm.inAnos.value = "";
        frm.inNumero.focus();
        return;
    }

    // Inicializa contador e a váriavel resposta
    let i = 1;
    let resposta = "";
    let chincilas = num;
    do {
        if (i === 1) {
            chincilas *= i;
            resposta += `${i}º Ano: ${chincilas} Chincilas\n`;
        } else {
            chincilas *= 3;
            resposta += `${i}º Ano: ${chincilas} Chincilas\n`;
        }
        i++;
    } while (i <= anos);

    // Exibe a resposta
    resp.innerText = resposta;
});

// Cria "ouvinte" para o evento reset
frm.addEventListener("reset", (e) => {
    frm.inNumero.value = "";
    frm.inAnos.value = "";
    frm.inNumero.focus();

    resp.innerText = "";
});
