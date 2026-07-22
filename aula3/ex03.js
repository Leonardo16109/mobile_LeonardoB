const numeros = [190, 258, 78, 740, 817, 432];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("Maior valor:", maior);
