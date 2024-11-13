const { lancarNota } = require("../src/lancamentoNotas");

describe("Teste de lançamento de notas", () => {
  test("Nota válida de 1UP e 2UP", () => {
    const nota1 = 7.5;
    const nota2 = 8.2;
    expect(lancarNota(nota1, nota2)).toBe("Notas salvas com sucesso!");
  });

  test("Nota 1UP fora do intervalo", () => {
    expect(() => lancarNota(-1.0, 8.2)).toThrow(
      "Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
    );
  });

  test("Nota 2UP fora do intervalo", () => {
    expect(() => lancarNota(7.5, 12.0)).toThrow(
      "Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
    );
  });

  test("Nota de 1UP com mais de uma casa decimal", () => {
    expect(() => lancarNota(7.567, 8.2)).toThrowError(
      "Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
    );
  });

  test("Nota de 2UP com mais de uma casa decimal", () => {
    expect(() => lancarNota(7.5, 8.256)).toThrowError(
      "Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal."
    );
  });

  test("Entradas não numéricas", () => {
    expect(() => lancarNota("sete", 8.2)).toThrow(
      "Entradas devem ser numéricas"
    );
  });
});
