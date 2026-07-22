function saudacao(nome) {
    return Olá, ${nome}! Bons estudos.;
}
const prompt = require("prompt-sync")();
const nome = prompt("Digite seu nome: ");
console.log(saudacao(nome));
