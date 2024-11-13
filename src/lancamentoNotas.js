function lancarNota(nota1, nota2) {
    if (typeof nota1 !== "number" || typeof nota2 !== "number") {
      throw new Error("Entradas devem ser numéricas");
    }
  
    if (nota1 < 0.0 || nota1 > 10.0 || Math.round(nota1 * 10) !== nota1 * 10) {
      throw new Error(
        "Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
      );
    }
  
    if (nota2 < 0.0 || nota2 > 10.0 || Math.round(nota2 * 10) !== nota2 * 10) {
      throw new Error(
        "Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
      );
    }
  
    return "Notas salvas com sucesso!";
  }
  
  module.exports = { lancarNota };
  