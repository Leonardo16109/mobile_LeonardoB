const input = require("readline-sync")

let media = 0
for (let i = 1; i <= 5; i++) {
    media += parseFloat(input.question(Número ${i}: )) / 5
}
if (media >= 7) {
    console.log("Aprovado")
} else if (media >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
