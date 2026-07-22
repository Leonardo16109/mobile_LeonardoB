function descricao(prod) {
    return `${prod.nome} custa R$ ${prod.preco.toFixed(2)} e tem ${prod.estoque} unidades em estoque.`;
}
const prod1 = { nome: "Feijão", preco: 8.50, estoque: 20 };
const prod2 = { nome: "Óleo", preco: 7.20, estoque: 15 };
console.log(descricao(prod1));
console.log(descricao(prod2));
