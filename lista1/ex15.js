let produtos = [
    {id: 1, nome: "Opa", preco: 10},
    {id: 2, nome: "bom", preco: 15},
    {id: 3, nome: "otimo", preco: 20},
    {id: 4, nome: "tudo", preco: 25},
    {id: 5, nome: "bem", preco: 30},
]

console.log(produtos.find(e => {return e.id == "3"}));
console.log(produtos.find(e => {return e.preco >= 100}));
console.log(produtos.map(e => {return e.nome}));
produtos.forEach(e => {console.log(`Produtos: ${e.nome} Preço: ${e.preco}`)});
