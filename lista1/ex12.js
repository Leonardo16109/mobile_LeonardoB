let calcular = (a, b, operacao) => operacao(a, b);
let soma = (a, b) => a + b;
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;

console.log(calcular(10, 5, soma));
console.log(calcular(10, 5, subtrair));
console.log(calcular(10, 5, multiplicar));

let divisao = calcular((a, b) => a / b);
console.log(divisao);
