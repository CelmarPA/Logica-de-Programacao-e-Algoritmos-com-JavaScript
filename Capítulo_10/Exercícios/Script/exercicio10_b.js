// Obtém elementos da página
const frm = document.querySelector("form");
const dvNome = document.querySelector("#divNome");

// Função para criar cores aleatórias
const coresAleatorias = () => {
    const r = Math.ceil(Math.random() * 255); // Componente vermelha (0-255)
    const g = Math.ceil(Math.random() * 255); // Componente verde (0-255)
    const b = Math.ceil(Math.random() * 255); // Componente azul (0-255)

    // Converte para formatp dexadecimal e garante que tenha sempre dois dígitos
    const corHex = `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    // Retorna a cor
    return corHex;
};

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o nome informado
    const nome = frm.inNome.value;

    // Transforma o nome em partes
    const partesNome = nome.split(" ");

    // Verifica se existem elementos h3 na página e exclui
    const h3s = document.querySelectorAll("h3");
    if (h3s.length > 0) {
        h3s.forEach((h3) => {
            h3.remove();
        });
    }

    // Cria os novo elementos h3
    for (const parte of partesNome) {
        // Cria o elemento h3
        const h3 = document.createElement("h3");

        // Cria o texto
        const texto = document.createTextNode(parte);

        // Muda a cor do h3 chamando a função coresAleatorias
        h3.style.color = coresAleatorias();

        // E define texto como filho de h3
        h3.appendChild(texto);

        // Define h3 como filho da divNome
        dvNome.appendChild(h3);
    }
});
