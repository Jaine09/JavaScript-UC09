/*//EX 01

let diaDaSemana = parseInt(prompt("Digite um número que corresponde ao dia da semana"));
//switch é uma estrutura de escolha
switch(diaDaSemana){
    case 1:
     console.log("segunda-feira");
     break;
    case 2:
     console.log("terça-feira");
     break;
    case 3:
     console.log("quarta-feira");
     break;
    case 4:
     console.log("quinta-feira");
     break;
    case 5:
     console.log("sexta-feira");
     break;
    default:
        console.log("fim de semana");
};*/

//EX 02

/*let fruta = prompt("Digite o nome de uma fruta");

switch(fruta) {
    case "limão":
    case "uva":
    case "laranja":
        console.log("Essa fruta é cítrica");
        break;
    case "abacate":
    case "manga":
        console.log("Essa frutaa é tropical");
        break;
    default:
        console.log("Não sei que tipo de fruta é essa");
};*/

// EX 03 Solicitar ao usuario dois número e uma operação.

/*let numero1 = parseInt(prompt("Digite o primeiro número"));
let numero2 = parseInt(prompt("Digite o segundo número"));
let operação = prompt("Escolha uma operação:\n adição(+)\n subtração(-)\n divisão(/) \n multiplicação(*)")
let resultado; //variavel auxiliar
 
switch(operação) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "/":
        resultado = numero1 / numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    default:
        resultado = "Operação inválida";
};
console.log(resultado);*/

/*EX 04 Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é 
positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". 
Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, 
o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve 
exibir "Entrada inválida".

Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:

Solicitar ao usuário que insira um número.

Verificar se o número é positivo, negativo ou zero utilizando um switch statement.

Exibir a mensagem correspondente ao tipo de número.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

let number = parseInt(prompt("Digite um número"));

switch(true){
    case (number > 0):
        console.log("o número é positivo");
        break;
    case (number < 0):
        console.log("O número é negativo");
        break;
    case  (number == 0):
        console.log("O número é zero");
        break;
    default:
        console.log("Entrada Inválida");
};*/
 
/* Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da  
semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não  
for um número válido, o programa deve exibir "Entrada inválida".
 Para implementar a verificação do nome do dia da semana, utilize um switch statement. 
 O programa deve seguir a seguinte estrutura:
 Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).
 Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um 
switch statement.
 Se a entrada do usuário não for um número válido, exibir "Entrada inválida".*/

let diaDaSemana = Number(prompt("Digite o dia da semana (1-7)"))

switch(diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Entrada Inválida");
}


