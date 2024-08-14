// Cria referência ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um "ouvinte" de evento, acionado quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém e converte a hora do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value);
    let horaFranca = horaBrasil + 5; // calcula a hora na frança
    if (horaFranca > 24) { // se passar das 24 horas na Franca
        horaFranca = horaFranca - 24; // subtrai 24
    }

    // Exibe a resposta 
    resp.innerText = `Hora na França ${horaFranca.toFixed(2)}`;
});
