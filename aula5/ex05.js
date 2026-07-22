const produtos = [
  { nome: "Teclado Gamer", preco: 150 },
  { nome: "Mouse do Paulinho", preco: 30 },
  { nome: "Cpu", preco: 80 },
  { nome: "Munitor", preco: 20 }
];

const caros = produtos.filter(p => p.preco > 50);
const nomesCaros = caros.map(p => p.nome);
console.log(nomesCaros);
