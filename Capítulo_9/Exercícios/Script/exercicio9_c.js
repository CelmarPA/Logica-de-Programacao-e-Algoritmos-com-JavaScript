// Obtém os elementos da página
const frm = document.querySelector("form")
const respPend = document.querySelector("span");
const respLista = document.querySelector("h4");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém os dados de entrada
    const servico = frm.inServico.value;

    // Verifica se o serviço já foi adicionado anteriormente
    if (servicoExiste()) {
        alert("Serviço adicionado anteriormente.");
        frm.inServico.value = "";
        frm.inServico.focus();
        return;
    }   

    // Chama função adicionarServico
    adicionarServico(servico);
});

// Função servicoExiste verifica se serviço já foi listado
const servicoExiste = (servico) => {
    // Verifica se o serviço  já está na lista
    if (localStorage.getItem("servico")) {
        const servicos = localStorage.getItem("servico").split(";");

        return servicos.includes(servico);
        } else {
            false;
        }
};

// Função adicionarServico
const adicionarServico = (servico) => {
    // Verifica se já existem dados em localStorage
    if (localStorage.getItem("servico")) {
        novoServico = localStorage.getItem("servico") + ";" + servico;

        // Adiciona ao localStorage
        localStorage.setItem("servico", novoServico);
    } else {
        // Adiciona no servico sem ";"
        localStorage.setItem("servico", servico);
    }

    //Limpa campo e foca
    frm.inServico.value = "";
    frm.inServico.focus();
    // Chamar função contarServico
    contarServicos();
};

// Função contarServicos
const contarServicos = () => {
    let count = 0
    if (localStorage.getItem("servico")) {
        const servicos = localStorage.getItem("servico").split(";");
        // Conta a quantidade de servicos
        count = servicos.length;
    }

    // Exibe serciços pendentes
    respPend.innerText = count;
};

// Cria "ouvinte" para o evento click de btExecutar
frm.btExecutar.addEventListener("click", () => {
    // Verifica se a lista de serviços não está vazia
    if (!localStorage.getItem("servico")) {
        alert("Não existem servicos pendentes!");
        frm.inServico.focus();
        return;
    }

    // Obtém o conteúdo de localStorage
    const servicos = localStorage.getItem("servico").split(";");

    // Exite o serviço em execução
    respLista.innerText = servicos.shift();

    // Limpa o contéudo do localStorage
    localStorage.removeItem("servico")
    // Monta a nova lista
    for (const servico of servicos) {
        // Chama função adicionarServicos
        adicionarServico(servico);
    }

    // OU OUTRA ABORDAGEM é usar join para salvar a nova lista sem o item removido
    // localStorage.setItem("servico", servicos.join(";"));

    // Chama a função contarServicos
    contarServicos();
});

// Chama a função contarServico quando a pagina é carregada
window.addEventListener("load", contarServicos);
