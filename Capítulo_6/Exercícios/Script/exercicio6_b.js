// Obtém os elementos da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// Declara array de números
let numeros = [];
// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form
    
    // Obtém o número
    const num = Number(frm.inNumero.value);

    if (numeros.includes(num)) {
        alert(`O número ${num} já está na lista!`);
        frm.inNumero.value = "";
        frm.inNumero.focus();
        return;
    }

    // Adiciona ao final do array
    numeros.push(num);

    // Limpa campo e foca
    frm.inNumero.value = "";
    frm.inNumero.focus();

    // Cria lista do números
    let lista = "";

    for (let i = 0; i < numeros.length; i++) {
        if (i == numeros.length - 1) {
            lista += `${numeros[i]}`;
        } else {
            lista += `${numeros[i]}, `;
        }
    }

    // Exibir lista
    resp1.innerText = `Número(s): ${lista}`;
});

// Cria "ouvinte" para evento click
frm.btVerificar.addEventListener("click", () => {
    // Verifica se está em ordem crescente
    const emOrdem = numeros.every(
        (numero, i) => i === 0 || numero >= numeros[i - 1]
    );

    resp2.innerText = emOrdem
        ? "Atenção... Números estão em ordem crescente!"
        : `Atenção... Números não estão em ordem crescente!`;

    numeros = [];
});
