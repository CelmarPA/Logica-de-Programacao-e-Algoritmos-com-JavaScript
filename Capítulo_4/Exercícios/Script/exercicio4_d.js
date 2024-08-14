// Cria referência aos elementos frm e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Cria "ouvinte" do evento submit
frm.addEventListener("submit", (e) => {
    // Limpa os campos h3
    resp1.innerText = ``;
    resp2.innerText = ``;
    e.preventDefault(); // Evita o envio do form   

    // Obtém os lados
    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    // Verifoca se é possivel formar um triangulo
    let tipo;
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {   
        if (ladoA === ladoB && ladoB === ladoC) {
            tipo = "Equilátero";
        } else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoC !== ladoA) || (ladoA === ladoC && ladoC !== ladoB)) {
            tipo = "Isósceles";
        } else {
            tipo = "Escaleno";
        }
        resp1.innerText = `Lados podem formar um triângulo`;
        resp2.innerText = `Tipo: ${tipo}`;
    } else {
        resp1.innerText = `Lados não podem formar um triângulo`
        frm.inLadoA.focus();
    }    
});
