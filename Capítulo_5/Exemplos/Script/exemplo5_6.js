// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const num = Number(frm.inNumero.value);

    // // Inicializa a variável contador
    // let numDivisores = 0;

    // // Laço de repetição para calcular os divisores de um numero
    // for (let i = 1; i <= num; i++) { // verifica se i (1, 2, 3...) é divisor do num
    //     if (num % i === 0) {
    //         numDivisores++;
    //     }
    // }
    
    // // Condição para definir se o número é primo
    // if (numDivisores === 2) { // se possui apenas 2 divisores, é primo
    //     resp.innerText = `${num} é Primo!`;
    // } else {
    //     resp.innerText = `${num} não é Primo!`;
    // }

    // Código otimizado
    // Iniciliza a variável flag
    let temDivisor = 0;

    // Laço de repetição para calcular os divisores de um numero
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) { // se tem um divisor
            temDivisor = 1; // muda o flag
            break; // sai da repetição
        }
    }

    if (num > 1 && !temDivisor) { // se num > 1 e não possui divisor
        resp.innerText = `${num} é Primo!`;
    } else {
        resp.innerText = `${num} não é Primo!`
    }
});
