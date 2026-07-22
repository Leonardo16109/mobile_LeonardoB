function contarLetra(texto, letra){
    let qntd = 0
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == letra){
            qntd ++
        }
    }
    return qntd
}

let texto = "arroz"
let letra = "i"
console.log(`Texto: ${text} letra: ${contarLetra}`)
