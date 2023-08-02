/*05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. */

let nomeCliente = prompt("Digite o nome do cliente");
let valorTotal = Number(prompt("Digite o valor total da compra"))
let desconto = parseFloat(prompt("coloque o valor do desconto"))
let valorDesconto = valorTotal/100 * desconto

let valorFinal = valorTotal - valorDesconto;

console.log(`o cliente ${nomeCliente} fez uma compra no valor total de ${valorFinal}`)