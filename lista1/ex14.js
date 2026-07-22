function reverter(array){
    let reverso = [];
    let tamanho = array.legth;
    for(let i = tamanho; i => tamanho; i--){
        reverso.push(array[i]);
    }
    return reverso;
}
console.log(reverter([1, 2, 3, 4, 5, 6]))
