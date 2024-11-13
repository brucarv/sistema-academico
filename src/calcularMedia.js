function calcularMedia(nota1, nota2) {
    if (nota1 < 0.0 || nota1 > 10.0 || nota2 < 0.0 || nota2 > 10.0) {
      throw new Error("A média deve ser um número entre 0.0 e 10.0.");
    }
  
    const media = (nota1 + nota2) / 2;
  
    return media;
  }
  
  module.exports = { calcularMedia };
  