// Obtém os elementos da página
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

// Declara as váriaveis de escopo global
const erros = []; // vetor com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1; // num aleatório entre 1 e 100
const CHANCES = 6; // constante com o número máximo de chances

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    // Obtém o número
    const numero = Number(frm.inNumero.value);

    // Verifica se acertou
    if (numero === sorteado) {
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true; // troca status dos botões
        frm.btNovo.className = "exibe"; // Mostra o botão Jogar Novamente
    } else {
        if (erros.includes(numero)) {
            // se número existe no vetor erros (já apostou)
            alert(`Você há apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero); // adiciona o número ao vetor
            const numErros = erros.length; // Obém tamanho do vetor
            const numChances = CHANCES - numErros; // calcula o nº de chances

            // Exibe nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if (numChances === 0) {
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over! Número Sorteado: ${sorteado}`;
            } else {
                // Usa operador ternário para mensagem de dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }

    // Limpa campo de entrada e foca no campo
    frm.inNumero.value = "";
    frm.inNumero.focus();
});

// Cria "ouvinte" para o evento click do btNovo
frm.btNovo.addEventListener("click", () => {
    location.reload(); // recarrega a página
});
