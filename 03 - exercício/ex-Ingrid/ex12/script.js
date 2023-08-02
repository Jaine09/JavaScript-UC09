let valor = 1;
let vprompt;
let maior = 0;
while( valor <= 5){
    vprompt = parseInt(prompt());
    if(maior < vprompt){
        maior = vprompt;
    }

    valor++;
} console.log(maior);
    


