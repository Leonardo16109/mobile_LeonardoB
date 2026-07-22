const produtos = [
  { nome: "Arroz", preco: 25 },
  { nome: "Feijão", preco: 8.50 },
  { nome: "Óleo", preco: 7.20 },
  { nome: "Açúcar", preco: 4.30 }
];
for (const item of produtos) {
  console.log(`Produto: ${item.nome} - Preço: R$ ${item.preco}`);
}
