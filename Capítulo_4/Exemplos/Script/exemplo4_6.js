// Cria referência ao form e os elementos h3
const frm = document.querySelector("form");
const resp1= document.querySelector("#outResp1");
const resp2= document.querySelector("#outResp2");
const resp3= document.querySelector("#outResp3");

// Cria um "ouvinte" de evento para submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evite o envio do form

    // Obtém o valor do saque
    const saque = Number(frm.inSaque.value);

    if (saque % 10 !== 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        frm.inSaque.focus();
        return;
    }

    const notasCem = Math.floor(saque / 100); // Calcula as notas de 100
    let resto = saque % 100; // Quanto sobra para pagar

    const notasCinquenta = Math.floor(resto / 50) // Calcula as notas de 50
    resto = resto % 50 // quanto ainda sobra

    const notasDez = Math.floor(resto / 10); // Calcula as notas de 10

    if (notasCem > 0) {
        resp1.innerText = `Notas de R$100: ${notasCem}`; 
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`;
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$10: ${notasDez}`;
    }
});
