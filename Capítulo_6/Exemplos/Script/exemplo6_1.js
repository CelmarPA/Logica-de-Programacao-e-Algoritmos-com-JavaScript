// Obtém os elementos da página
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

// Declara array (vetor) global
const pacientes = [];

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o nome do paciente
    const nome = frm.inPaciente.value;

    // Adiciona o no ao final array pacientes
    pacientes.push(nome);

    // Inicializa a váriavel lista
    let lista = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`;    
    }

    // Exibe a lista de pacientes
    respLista.innerText = lista;

    // Limpa o contéudo do campo do formulário
    frm.inPaciente.value = "";

    // Foca no campo do formulário
    frm.inPaciente.focus();
});

// Cria "ouvinte" para o evento click btUrgencia
frm.btUrgencia.addEventListener("click", () => {
    // Verifica se as validações do form estão ok
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgencia");
        frm.inPaciente.focus();
        return;
    }

    // Obtém o nome do paciente
    const nome = frm.inPaciente.value;

    // Adiciona o nome ao inicio do array pacientes
    pacientes.unshift(nome);

    // Inicializa a váriavel lista
    let lista = "";

    // Usa forEach sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    // Exibe a lista de pacientes
    respLista.innerText = lista;

    // Limpa o campo do formulário e foca
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
});

// Cria "ouvinte" para o evento click btAtender
frm.btAtender.addEventListener("click", () => {
    // Se tamanho do array = 0
    if (pacientes.length === 0) {
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    }

    // Remove o nome do início da fila (e obtém o nome)
    const atender = pacientes.shift();

    // Exibe o nome em atendimento
    respNome.innerText = atender;

    // Inicializa a variável lista
    let lista = ""

    // Usa forEach para concater os pacientes a lista
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));

    // Exibe a lista de pacientes
    respLista.innerText = lista;
});
