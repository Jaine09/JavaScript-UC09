// Imprimir no console de 1 a 5

/*for (let i = 1; i <= 5; i++){
    console.log(i);
}

for(let x = prompt() ; x >= 0; x--){
      console.log(x); 
}

//usa % para saber se o número é par ou ímpar

//Imprima um número de 1 até 10
for(let j = 1; j <= 10; j++){
    console.log(j);
}

//Imprima os números pares de 0 a 20
for(let number= 0; number <= 20; number++){ // ou for(let number = 1; number <= 20; number+=2)
    if(number%2 == 0){
          console.log(number)
    }
  
}

// imprima os números ímpares de 10 a 30
for(let number= 10; number <= 30; number++){ // ou for(let number = 11; number <= 30; number+=2)
    if(number%2 !== 0){
          console.log(number)
    }
}

//Imprima o número de 0 a 100 decrementando de 5 em 5
for(let i = 100; i >= 0; i-=5){
    console.log(i)
}

//Imprima a tabuada do 7 de 1 a 10
let numero = 7;
for(let i = 1; i<=10;i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
};

//Digitar um número no prompt e imprimir os números pares de 0 até esse número
let numero= parseInt(prompt("Digite um número"))
for(let i = 0; i <= numero; i +=2){
    console.log(i)
}

//Solicite ao usuario que digite dois número, imprima os número entre eles de forma crescente
const num1= Number(prompt("digite o primeiro número"));
const num2= Number(prompt("digite o segundo número"));
for(let i = num1; i<= num2;i++){
    console.log(i);
}

const num1= Number(prompt("digite o primeiro número"));
const num2= Number(prompt("digite o segundo número"));

if(num1 > num2){
    for(let i = num2; i<= num1;i++){
        console.log(i);
}
} else {
    alert("O primeiro numero deve ser maior que o segundo")
    num1 = Number(prompt("digite o primeiro número de novo"))
    for(let i = num2; i <= num1;i++){
        console.log(i);
}
}*/

/*Desenvolva um programa que solicite ao usuário que digite um número e, em seguida, 
imprima no console a soma dos números ímpares entre 1 e esse número.*/
let usuario = Number(prompt("Digite um número"))
let somaImpares = 0;
for(let x = 1; x <= usuario; x+=2){
    somaImpares += x;
}
console.log(`A soma dos números ímpares entre 1 e ${usuario} é:  ${somaImpares}`)



