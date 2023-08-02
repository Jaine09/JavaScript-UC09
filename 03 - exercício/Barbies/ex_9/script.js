//Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

let num1 = Number(prompt("Digite seu primeiro número"));
let num2 = Number(prompt("Digite seu segundo número"));
let operacao = prompt("escolha a operação\n adição (+)\n subtração (-)\n divisão (/)\n multiplicação (*)")
let result;

switch(operacao){
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "/":
        result = num1 / num2
        break;
    case "*":
        result = num1 * num2
        break;
    default:
        result = "operação inválida"
} console.log(result)