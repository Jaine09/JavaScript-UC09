let nome = prompt("esceva seu nome");
let idade = 19;

if(idade >= 18){
    console.log(nome, "pode dirigir");
}else{
    console.log(nome, "não tem permissão para dirigir");
}


idade >= 18 ? console.log(nome, "pode dirigir") : console.log(nome, "não pode dirigir");