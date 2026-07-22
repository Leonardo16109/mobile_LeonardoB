const prompt = require("prompt-sync")();
const numeros = [];
let soma = 0;
const quantidade = Number(prompt("Quantos números deseja digitar? "));

for (let i = 0; i < quantidade; i++) {
    const numero = Number(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
    soma += numero;
}
const media = soma / quantidade;
console.log("Soma:", soma);
console.log("Média:", media);
