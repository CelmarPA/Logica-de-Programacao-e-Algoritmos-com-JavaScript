/**
 * c) Elaborar um programa que solicite um número de parcelas que 
 * devem ser geradas e calcule a data de cada uma dessas parcelas, 
 * uma para cada mês, a partir do mês seguinte ao atual, mantendo 
 * o dia atual. Observe o exemplo de execução desse programa, 
 * considerando que a data atual seja 5 de janeiro de 2022.
 * 
 *          Quantas Parcelas? 6
 *          1ª Parcela: 05/02/2022
 *          2ª Parcela: 05/03/2022
 *          3ª Parcela: 05/04/2022
 *          4ª Parcela: 05/05/2022
 *          5ª Parcela: 05/06/2022
 *          6ª Parcela: 05/07/2022
 */

// Adiciona o pacote prompt-sync
const prompt = require("prompt-sync")();

// Obtém quantidade de parcelas
const parcelas = Number(prompt("Quantas Parcelas? "));

const data = new Date();

for (let i = 1; i <= parcelas; i++) {
    data.setMonth(data.getMonth() + 1); // aumenta um mês na data
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // mês varia de 0 a 11
    const ano = data.getFullYear();
    // acrescenta um 0 se dia for menor que 10
    const diaZero = dia < 10 ? "0" + dia : dia;
    const mesZero = mes < 10 ? "0" + mes : mes;
    console.log(`${i}ª Parcela: ${diaZero}/${mesZero}/${ano}`);
    // console.log(`${i}ª Parcela: ${dia.toString().padStart(2, "0")}/${mes.toString().padStart(2, "0")}/${ano}`);
}
