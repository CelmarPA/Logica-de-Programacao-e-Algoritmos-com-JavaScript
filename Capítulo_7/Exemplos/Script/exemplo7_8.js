// Obtém os elementos da página
const frm = document.querySelector("form");
// const reps = document.querySelector("h3"); // Não é utilizado nesse programa

// Porcetagem da multa por atraso
const TAXA_MULTA = 2 / 100;

// Porcentagem de juros por dia de atraso
const TAXA_JUROS = 0.33 / 100;

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém data do vencimento e valor
    const dataVenc = frm.inDataVenc.value;
    const valor = Number(frm.inValor.value);

    // Instancia objeto Date
    const hoje = new Date();
    const vencimento = new Date();

    // O formato da data obtido é aaaa-mm-dd
    const partes = dataVenc.split("-");
    vencimento.setDate(Number(partes[2]));
    vencimento.setMonth(Number(partes[1]) - 1); // É subtraido - 1 porque setMoth os meses são representado entre 0 - 11
    vencimento.setFullYear(Number(partes[0]));

    // Calcula a diferença de dias entre as datas (em ms)
    const atraso = hoje - vencimento;

    // Inicializa as váriaveis multa e juros
    let multa = 0;
    let juros = 0;

    // Se conta estiver em atraso
    if (atraso > 0) {
        // Converte ms do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms = 86400000)
        const dias = atraso / 86400000;
        multa = valor * TAXA_MULTA;
        juros = valor * TAXA_JUROS * dias;
    }

    // Calcula o total
    const total = valor + multa + juros;

    // Exibe os valores 
    frm.outMulta.value = multa.toFixed(2);
    frm.outJuros.value = juros.toFixed(2);
    frm.outTotal.value = total.toFixed(2);
});

