const input = require("readline-sync")

let impares = 0
let pares = 0
for (let i = 1; i <= 10; i++) {
    if (parseInt(input.question(Número ${i}: )) % 2 == 0) {
        pares++
        continue
    } 
    impares++
}
console.log(Ímpares: ${impares})
console.log(Pares: ${pares})
