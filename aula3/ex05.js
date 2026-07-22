const prompt = require("prompt-sync")();
const nomes = [];

while (true) {
    const nome = prompt("Digite um nome (ou 'fim' para encerrar): ");

    if (nome.toLowerCase() === "fim") {
        break;
    }
    nomes.push(nome);
}
console.log(Foram cadastrados ${nomes.length} nomes.);
for (let i = 0; i < nomes.length; i++) {
    console.log(${i + 1}. ${nomes[i]});
}
