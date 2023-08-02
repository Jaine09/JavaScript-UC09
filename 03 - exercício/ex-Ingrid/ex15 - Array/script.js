/*ARRAYS
posição é diferente de quantidade
ex: let n = [1,2,3] tem duas posição porém em quantidade tem três
lenght= tamanho ( no caso a cima seria três)

criar uma lista:
let nome =["ana", "maria", "julia"]

alterar algum item da lista:
nome[2]= "marina" ( julia se passaria a ser Maria)

adicionar item ao final da lista:
nome.push("Mariano")*/

let comida = ["arroz", "batata", "feijão", "carne", "melancia"];
console.log(comida)

comida[3]= "pera";
comida[5]= "melão";
console.log(comida);

comida.push("macarrão");
console.log(comida);

let nome =["Mariana", "Felipe"];
console.log(nome);

comida = comida.concat(nome);
console.log(comida);