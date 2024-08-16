// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

// Declara a o array global
const carros = [];

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtem os dados do form
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);

    // Adiciona os dados so array de objetos
    carros.push({ modelo, preco });

    // Limpa os campos do form
    frm.inModelo.value = "";
    frm.inPreco.valur = "";

    // Posiciona o curso em inModelo
    frm.inModelo.focus();

    // Dispara um evento de click em btListar (equivalente a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));
});

// Cria "ouvinte" para o evento click para btLista
frm.btListar.addEventListener("click", () => {
    if (carros.length === 0) {
        alert("Não há carros na lista!");
        return;
    }

    // método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n", "");

    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(
        40
    )}\n${lista}`;
});

// Cria "ouvinte" para o evento click para btFiltrar
frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar? R$"));

    if (maximo === 0 || isNaN(maximo)) {
        return;
    }

    // Cria um array com os objetos que atendem a condição
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);

    if (carrosFilter.length === 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado!");
        return;
    }

    let lista = carrosFilter.reduce((acumulador, carro) => acumulador += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`, "");

    resp.innerText = `Carros Até: R$${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

// Cria "ouvinte" para o evento click para btSimular
frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "));

    if (desconto === 0 || isNaN(desconto)) {
        return;
    }
    
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }));

    let lista = "";
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`;
    }

    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});
