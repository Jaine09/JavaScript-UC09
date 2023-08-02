códigoCompra = prompt("digite seu código")
let valor = 50
switch (códigoCompra) {
    case "1":
        console.log(valor - (valor * 0,10))
    break;
    case "2":
        console.log(valor - (valor * 0,15))
        break;
    case "3":
        console.log(valor)
        break;
    case "4":
        console.log(valor + (valor * 0,10))
        break;
}
