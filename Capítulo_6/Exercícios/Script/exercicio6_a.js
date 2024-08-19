// Obtém os elementos da página
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("pre");

// Declara o array global
const times = [];

// Focar no campo
frm.inClube.focus();

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form
    // Obtém os clubes
    const clube = frm.inClube.value.trim();

    if (clube === "") {
        alert("Por favor, preencha o nome do clube.");
        return;
    }

    // Adicina clube ao array
    times.push(clube);

    // Limpa o campo
    frm.inClube.value = "";

    // Posiciona o cursor
    frm.inClube.focus();

    // Mensagem de time adicionado
    alert(`Ok... ${clube} adicionado!`);

    // Dispara o click em btListar
    frm.btListar.dispatchEvent(new Event("click"));
});

// Cria "ouvinte" para o evento click do btListar
frm.btListar.addEventListener("click", () => {
    // Verifica se há clubes
    if (times.length === 0) {
        alert("Não há clubes na lista!");
        frm.inClube.value = "";
        frm.inClube.focus();
        return;
    }

    // Criar a lista
    let lista = "";
    for (const time of times) {
        lista += `${time}\n`;
    }

    // Exibe a lista dos clubes
    resp1.innerText = `Há ${times.length} clube(s) listado(s):`;
    resp2.innerText = lista;
});

// Cria "ouvinte" para o evento click do btMontar
frm.btMontar.addEventListener("click", () => {
    if (times.length < 2 || times.length % 2 !== 0) {
        alert(
            "Lista de times deve conter mais de 2 clubes e ter quantidade par de clubes!"
        );
        frm.inClube.value = "";
        frm.inClube.focus();
        return;
    }

    let lista = "";

    for (let i = 0; i < times.length / 2; i++) {
        lista += `${times[i]} x ${times[times.length - 1 - i]}\n`;
    }

    // Exibe a tabela
    resp1.innerText = `Tabela de Jogos:`;
    resp2.innerText = lista;
});
