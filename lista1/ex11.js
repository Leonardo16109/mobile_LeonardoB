let input = require("readline-sync")

function podeVotar(idade) {
    if (idade >= 16) {
        return true
    }
    return false
}

let idade = input.questionInt("Idade: ")
if (podeVotar(idade)) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}
