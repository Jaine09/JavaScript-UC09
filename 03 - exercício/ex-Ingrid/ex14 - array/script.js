do{
    operação = parseInt(prompt("1:soma 2:multiplicação 3:subtração 4:divisão"));
} while(operação < 1 || operação > 4);

let numero = parseFloat(prompt("de qual número:"));

switch(operação){
    case "1":
        for(let varia = 0;varia <= 10; varia++){ //o uso do while seria melhor pois não precisa criar outra variavel
            console.log(`${numero} + ${varia} = ${numero+varia} `);
        }
        break;
    case "2":
        for(let varia2 = 0;varia2 <= 10; varia2++){
            console.log(`${numero} X ${varia2} = ${numero*varia2}`);
        }
        break;
    case "3":
        for(let varia3 = 0;varia3 <= 10; varia3++){
            console.log(`${numero} - ${varia3} = ${numero-varia3}`);
        }
        break;
    case "4":
        for(let varia4 = 0;varia4<= 10; varia4++){
            if(varia4 == 0){
                var result = ("não é possível fazer a divisão"); //variavel auxiliar
            }else{result = numero/varia4
            }
            console.log(`${numero} : ${varia4} = ${result}`);
        }
        break;
}

/* do(comando)while{condição} usasse quando quer restringir a escolha do úsuario
o case não pega intervalos ( operação < 1 || operação > 4) o if sim

condicional: duas saídas possiveis, switch case e if

repetição: while, for e do while
*/