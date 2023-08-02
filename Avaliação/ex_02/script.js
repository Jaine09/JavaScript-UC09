/*02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console.*/

let valorTotaldeGasto = Number(prompt("Qual o valor total gasto"));
let valorDisponivel = Number(prompt("Digite o valor disponível"));
let operacao = prompt("Digite a operação desejada soma(+)\n subtração(-)\n multiplicação(*)\n divisão(/)")

switch(operacao){
    case "+":
        console.log(valorDisponivel+valorTotaldeGasto)
        break;
    case "-":
        console.log(valorDisponivel-valorTotaldeGasto)
        break;
    case "*":
        console.log(valorDisponivel*valorTotaldeGasto)
        break;
    case "/":
        console.log(valorDisponivel/valorTotaldeGasto)
        break;
    default:
        console.log("Operação ínvalida")
}

//console.log(`soma = ${valorDisponivel + valorTotaldeGasto}`);
//console.log(`subtração = ${valorDisponivel - valorTotaldeGasto}`);
//console.log(`multiplicação = ${valorDisponivel * valorTotaldeGasto}`);
//console.log(`divisão = ${valorDisponivel / valorTotaldeGasto}`);
