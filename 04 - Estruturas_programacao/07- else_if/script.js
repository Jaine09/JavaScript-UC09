// let nota = prompt();
// if(nota >= 7){
//     console.log("Aprovado");
// } else if (nota > 5){
//     console.log("Recuperação")
// } else{
//     console.log("Reprovado");
// }

let nota1 = parseFloat(prompt("Digite sua Nota 01"));
let nota2 = parseFloat(prompt("Digite sua Nota 02"));
let nota3 = parseFloat(prompt("Digite sua Nota 03"));
let nota4 = parseFloat(prompt("Digite sua Nota 04"));

let média = (nota1 + nota2 + nota3 + nota4) / 4

if(média >= 7){
    console.log(`Aprovado! Nota final: ${média.toFixed(2)}`);
} else if (média > 5){
    console.log(`Recuperação! Nota final ${média.toFixed(2)}`);
} else{
    console.log(`Reprovado! Nota final ${média.toFixed(2)}`);
}

//toFixed arredonda duas casas depois da decimal