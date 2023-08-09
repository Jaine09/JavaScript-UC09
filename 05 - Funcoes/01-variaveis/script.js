// parametro é a mesma coisa que argumento
// ex01
function imprimirNoConsole(){
    console.log("Olá Jovem!")
} // não funcionaria somente nessa forma pq a funçao não foi chamada

//imprimirNoConsole(); // chamando a função

// ex 02
/*function imprimirUmNumero(num){ // num é o parametro da função
   console.log(`O número é ${num}`)
};

imprimirUmNumero(2); // entre (deve definir um número aqui dentro quando não estiver definido no paramentro da função)
imprimirUmNumero(4);
imprimirUmNumero(3);
imprimirUmNumero(5);
imprimirUmNumero(250);*/

// Escreva uma função que imprima no console o nome do usuário a partir do nome que foi digitado no prompt
/*function nomeDoUsuario(){
    nomeDoUsuario = prompt("Digite seu nome")
    console.log(`O nome digitado foi: ${nomeDoUsuario}`)
};
nomeDoUsuario();*/

// quando criado uma variavel fora ela não tem conflito com o da função pq ela só funciona dentro da função
/* let nome = prompt()
function nomeDoUsuario(aristoteles){
    console.log(`seu nome é ${aristoteles}`)
};
nomeDoUsuario(nome)*/

// Escreva uma função que imprima no console o dobro de um numero que definido na chamada função (direto no programa).

/*function diretoNoPrograma(num){
    console.log(num * 2)
};
diretoNoPrograma(350);*/

// escreva uma função que imprime a potencia de um número a partir do que foi definido na função

/*function imprimirPotencia (numero){
    var potencia = Math.pow(numero, numero)
    console.log(`O número ${numero} elevado a ele mesmo é: ${potencia} `)
}
imprimirPotencia(2);*/

/*function potencia(base, expoente){
    var potencia = Math.pow(base,expoente)
    console.log(`O número ${base} elevado a ${expoente} é: ${potencia} `)
}

potencia(5,2);*/

/*function potencia(base, expoente){
    var potencia = (Math.pow(base,expoente)*2)
    console.log(`O número ${base} elevado a ${expoente} multiplicado por 2 é: ${potencia} `)
}
potencia(2,3);*/

/*function repetirNumeros(numero){
    for(let i = 0; i < 10; i++){
        console.log(numero)
    }
}
var numero = prompt("Digte um número")
console.log(typeof numero)
repetirNumeros(numero);*/

// Escreva uma função que multiplique três número

function multiplicacao(num1, num2, num3){
    console.log(`O número ${num1} X ${num2} X ${num3} = ${num1*num2*num3}`)
}
multiplicacao(4,1,1);
