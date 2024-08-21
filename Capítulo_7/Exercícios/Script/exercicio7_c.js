// Obtém os elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria "ouvinte" para o evento de submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a data e o valor da multa
    const data = frm.inData.value;
    const multa = Number(frm.inMulta.value);

    // Obtém as partes da data
    const partes = data.split("-");

    const dataLimite = new Date();
    
    // Define a data limite
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1); // (partes[1] - 1) porquer os meses em Date() variam de 0 - 11
    dataLimite.setFullYear(Number(partes[0]));

    // Obtém dia mes e ano da dataLimte
    const dia = dataLimite.getDate();
    dataLimite.setDate(dia + 90);  // Calcula os 90 dias para obter a data limite
    const mes = dataLimite.getMonth() + 1;
    const ano = dataLimite.getFullYear();

   // Calcula desconto de 20%
    const desc = multa * 0.20;

    // Valcula o valor
    const valorMulta = multa - desc;

    // Exibe o resultado
    resp1.innerText = `Data Limite para Pagto com Desconto: ${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}`;
    
    resp2.innerText = `Valor com desconto: R$${valorMulta.toFixed(2)}`;
});
