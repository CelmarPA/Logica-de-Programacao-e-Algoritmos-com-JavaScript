// Obtém os elementos da página
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

// Cria "ouvinte" para evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém a tarefa informada
    const tarefa = frm.inTarefa.value;

    // Cria o elemento HTML h5
    const h5 = document.createElement("h5");

    // Cria um teto
    const texto = document.createTextNode(tarefa);

    // Define que texto será filho de h5
    h5.appendChild(texto);

    // E que h5 será filho de divQuadro
    dvQuadro.appendChild(h5);

    // Limpa o campo do form e foca no inTarefa
    frm.inTarefa.value = "";
    frm.inTarefa.focus();
});

// Cria "ouvinte" para evento click do btSelecionar
frm.btSelecionar.addEventListener("click", () => {
    // Obtém as tags h5 da página
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length === 0) {
        alert("Não há tarefas para selecionar.");
        frm.inTarefa.focus();
        return;
    }

    // Inicializa variável auxilar para indicar a linha selecionada
    let aux = -1;

    // Percorre a lista de elementos h5 inseridos na página
    for (let i = 0; i < tarefas.length; i++) {
        // Caso a tag seja da classe tarefa-selecionada (está selecionada)
        if (tarefas[i].className === "tarefa-selecionada") {
            // Troca para normal
            tarefas[i].className = "tarefa-normal";
            // Muda valor da variável auxiliar
            aux = i;
            // Sai da repetição
            break;
        }
    }

    // Se a linha está selecionada é a última, irá voltar para a primeira
    if (aux === tarefas.length - 1) {
        aux = -1;
    }

    // Muda o estilo da próxima linha
    tarefas[aux + 1].className = "tarefa-selecionada";
});

// Cria "ouvinte" para evento click do btRetirar
frm.btRetirar.addEventListener("click", () => {
    // Obtém as tags h5 da página
    const tarefas = document.querySelectorAll("h5");

    // Zera a lista salva caso tenha removidos todos os elementos
    if (tarefas.length === 0) {
        localStorage.clear();
    }

    // Inicializa variável auxiliar para indicar linha selecionada
    let aux = -1;

    // Percorre a lista das tarefas inseridas na página
    tarefas.forEach((tarefa, i) => {
        // Se da classe tarefa-selecionada
        if (tarefa.className === "tarefa-selecionada") {
            // Muda o valor da variável auxiliar
            aux = i;
        }
    });

    // Se não há tarefa selecionada (ou se lista vazia)
    if (aux === -1) {
        alert("Selecione um tarefa para removê-la...");
        return;
    }

    // Solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        // Remove um dos filhos de divQuadro
        dvQuadro.removeChild(tarefas[aux]);
    }
});

// Cria "ouvinte" para evento click do btGravar
frm.btGravar.addEventListener("click", () => {
    // Obtém as tags h5 da página
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length === 0) {
        alert("Não há tarefas para serem salvas.")
        return;
    }

    // Inicializa acumulador dados
    let dados = "";
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"; 
    });

    // Grava os dados no localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1));

    // Confere se os dados foram relamentes salvos
    if (localStorage.getItem("tarefasDia")) {
        alert("ok! Tarefas salvas.");
    }
});

// // Cria "ouvinte" para evento load da página
window.addEventListener("load", () => {
    // Verifica se há tarefas salvas no navegador do usuário
    if (localStorage.getItem("tarefasDia")) {
        // Cria um vetor com a lista de tarefas
        const dados = localStorage.getItem("tarefasDia").split(";");

        // Percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            // Cria o elemento HTML h5
            const h5 = document.createElement("h5");
            // Cria um texto
            const texto = document.createTextNode(dado);
            // Define que texto será filho de h5
            h5.appendChild(texto);
            // E que h5 será filho de divQuadro
            dvQuadro.appendChild(h5);
        });
    }
});
