/*let number= 1
let valorprompt;
let 
while(number <= 5){
    valorprompt=parseInt(prompt());
    
    number++
}*/



let nValor = 0;
for(let i = 1;i <= 5; i++){
    let valor = parseFloat(prompt());

    //let nValor (variavel auxiliar)
    //nValor= valor + nValor 
    nValor += valor

} console.log(`Soma: ${nValor}`);
console.log(`Média: ${nValor/i}`);