const carrinho = [
    { nome: "Caderno", preco: 18.90, quantidade: 3 },
    { nome: "Caneta", preco: 2.50, quantidade: 10 },
    { nome: "Mochila", preco: 149.90, quantidade: 1 },
    { nome: "Borracha", preco: 1.20, quantidade: 4 }
];

const subtotais = carrinho.map(item => item.preco * item.quantidade);

console.log("Subtotais:", subtotais);

let total = 0;

subtotais.forEach(subtotal => {
    total += subtotal;
});

console.log("Total: R$ " + total.toFixed(2));

const itensCaros = carrinho
    .filter(item => item.preco * item.quantidade > 100)
    .map(item => item.nome);

console.log("Itens com subtotal acima de R$ 100:");
itensCaros.forEach(item => console.log(item));
