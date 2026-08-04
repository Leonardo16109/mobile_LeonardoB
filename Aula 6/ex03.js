const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultadoFor = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        resultadoFor.push(numeros[i] * 10);
    }
}

const resultadoMap = numeros
    .filter(numero => numero % 2 === 0)
    .map(numero => numero * 10);

console.log("Resultado com for:", resultadoFor);
console.log("Resultado com filter/map:", resultadoMap);

console.log("São iguais?", JSON.stringify(resultadoFor) === JSON.stringify(resultadoMap));
