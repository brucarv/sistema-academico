const { calcularMedia } = require("../src/calcularMedia");

describe("Testes questão 1 - Módulo", () => {
  test("Deve retornar o resultado da divisão do primeiro número pelo segundo.", () => {
    expect(calcularMedia(10, 3)).toBe(1);
  });
  test("Deve retornar o resultado da divisão do primeiro número pelo segundo.", () => {
    expect(calcularMedia(0, 5)).toBe(0);
  });
  test("Deve retornar um erro se o valor do segundo número for 0.", () => {
    expect(() => calcularMedia(5, 0)).toThrow(
      "Não é possível dividir por zero"
    );
  });
});