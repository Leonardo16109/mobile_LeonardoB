function ranger(inicio, fim){
    let array = [];
    for (let i = inicio; i <= fim; i++){
        array.push(i);
    }
    return array;
}

function somar(array){
    let soma = 0;
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

const numeros = ranger(1, 10);
const resultado = somar(numeros);
console.log(resultado);
