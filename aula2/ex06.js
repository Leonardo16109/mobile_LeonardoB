const input = require("readline-sync")
const secreto = 42

let num
while (true) {
    num = parseFloat(input.question("Digite o secreto: "))
    if (secreto > num) {
        console.log("Maior")
    } else if (secreto < num) {
        console.log("Menor")
    } else {
        console.log("Acertou")
        break
    }
}
