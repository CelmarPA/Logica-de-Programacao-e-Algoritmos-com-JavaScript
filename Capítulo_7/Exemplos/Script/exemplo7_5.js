// Obtém os elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria "ouvinte" para o evento submit
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do form

    // Obtém nome do Funcionário
    const funcionario = frm.inFuncionario.value;

    // Divive o nome em itens de vetor, criados a cada ocorrência de espaço
    const partes = funcionario.split(" ");

    // Declara variável para concater o email
    let email = "";

    // Obtém a quantidade de partes
    const tam = partes.length;

    for (let i = 0; i < tam - 1; i++) { // Percorre itens do vetor (exceto o último)
        if (partes[i].length <= 3) {
            continue;
        }
        email += partes[i].charAt(0); // Obtém a letra inicial de cada parte
    }

    // Concatena as letras iniciais com a última parte e @empresa.com.br
    email += partes[tam - 1] + "@empresa.com.br";

    // Exibe o resultado
    resp.innerText = `E-mail: ${email.toLocaleLowerCase()}`;
});
