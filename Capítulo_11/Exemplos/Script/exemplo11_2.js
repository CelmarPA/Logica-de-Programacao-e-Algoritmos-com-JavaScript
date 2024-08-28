// Obtém os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

// Constante com o número total de poltranos do teatro
const POLTRONAS = 240;

// Vetor com as poltronas reservadas pelo cliente
const reservadas = [];

// Cria "ouvinte" para o evento load da página
window.addEventListener("load", () => {
    // Operador ternário: se houver dados salvas no localStorage, faz um split(";") e atribui esses dados ao array, caso contrário o array é iniciado vazio
    const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];
    
    // Loop para montar o nº total de poltronas 
    for (let i = 1; i <= POLTRONAS; i++) {
        // Cria a tag <figure>
        const figure = document.createElement("figure");
        // Cria a tag <img>
        const imgStatus = document.createElement("img");

        // Se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? "Image/poltronaOcupada.jpg" : "Image/poltronaDisponivel.jpg";

        // Classe com dimensão da img
        imgStatus.className = "poltrona"

        // Cria figcaption
        const figureCap = document.createElement("figcaption");

        // Quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        // Cria o texto
        const num = document.createTextNode(`[${zeros}${i}]`);

        // Define os pais de cada tag 
        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        // Se i módulo 24 === 12 (é o corredor: define margem direita 60px)
        if (i % 24 === 12) figure.style.marginRight = "60px";

        // Indica que figure é filha de divPalco
        dvPalco.appendChild(figure);

        // Se i módulo 24 === 0: o comando após && será executado (insere quebra de linha)
        (i % 24 === 0) && dvPalco.appendChild(document.createElement("br"));
    }
});


// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém contéudo de inPoltrona
    const poltrona = Number(frm.inPoltrona.value);

    // Valida o preenchimentol do campo da entrada... não pode ser maior que a constante
    if (poltrona > POLTRONAS) {
        alert("Informe um número de potrona válido");
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }
    
    const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];

    // Se poltrona escolhida está ocupada (existe em localStorage)
    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada...`);
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    // Captura a imagem da poltrona, dilha de divPalco
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

    // Modifica o atributo da imagem
    imgPoltrona.src = "Image/poltronaReservada.jpg";

    // Adiciona a poltrona ao vetor reservadas
    reservadas.push(poltrona);

    // Limpa o campo e foca
    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
});

// Cria "ouvinte" para o evento click do btConfirmar
frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length === 0) {
        alert("Não há poltronas reservadas");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("poltronasOcupadas") ? localStorage.getItem("poltronasOcupadas").split(";") : [];

    // Loop for decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
    for (let i = reservadas.length - 1; i >=0 ; i--) {
        ocupadas.push(reservadas[i]);

        // Captura a imagem da poltrona, filha de divPalco
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

        // Modifica o atributo da imagem
        imgPoltrona.src = "Image/poltronaOcupada.jpg";

        // Remove do vetor a reserva já alterada
        reservadas.pop()
    }

    // Salva no localStorage
    localStorage.setItem("poltronasOcupadas", ocupadas.join(";"));
});
