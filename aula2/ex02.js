const input = require("readline-sync")

let num1 = parseFloat(input.question("Número 1: "))
let num2 = parseFloat(input.question("Número 2: "))

console.log(Soma: ${num1 + num2})
console.log(Subtração: ${num1 - num2})
console.log(Multiplicação: ${num1 * num2})
console.log(num2 != 0 ? Divisão: ${num1 / num2} : "[Erro] ")
