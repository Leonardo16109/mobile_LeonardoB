const input = require("readline-sync")

let numero = parseFloat(input.question("Número: "))
for (let i = 0; i <= 10; i++) {
    console.log(${numero} x ${i} = ${numero * i})
}
