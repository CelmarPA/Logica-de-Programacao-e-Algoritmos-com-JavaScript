// Obtém os elementos da página
const frm = document.querySelector("form");
const dvIdade = document.querySelector("#divIdade");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a idade informada pelo usuário
    const idade = Number(frm.inIdade.value);

    // Verifica se a idade é valida
    if (idade < 1 || idade > 120) {
        alert("Idade de estar entre 1 e 120 anos.");
        // Limpa o campo e foca
        frm.inIdade.value = "";
        frm.inIdade.focus();
        return;
    }

    // tranforma idade e um string
    const srtIdade = idade.toString()

    // Loop para obter as imagens de acordo com a idade informada
    for (const num of srtIdade) {
        // Cria o elemento img
        const img = document.createElement("img");
        // Cria o source da imagem
        img.src = `Image/numero_${num}.png`;
        // Cria o texto alternativo
        img.alt = `Vela de ${num} anos`;

        // img é filho de divIdade
        dvIdade.appendChild(img);
    }

    // Desabilida o botão btExibir 
    frm.btExibir.disabled = true;
});

// Cria "ouvinte" para evento reset
frm.addEventListener("reset", () => {
    // Recarrega a página
    window.location.reload();
});