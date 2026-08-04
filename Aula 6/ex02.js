const palavras = ["sol", "computador", "rede", "programacao", "bit", "algoritmo"];

const maiores = palavras.filter(palavra => palavra.length > 5);

console.log("Palavras com mais de 5 letras:", maiores);
console.log("Quantidade:", maiores.length);
