function classificar(nota) {
  if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 8:", classificar(8));
console.log("Nota 6:", classificar(6));
console.log("Nota 4:", classificar(4));
