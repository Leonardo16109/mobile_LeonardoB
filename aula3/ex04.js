const numeros = [10, 25, 8, 40, 17, 32];
let pares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    }
}
console.log("Quantidade de números pares:", pares);
