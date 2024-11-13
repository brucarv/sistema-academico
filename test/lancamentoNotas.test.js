const { lancarNota } = require("../src/lancamentoNotas");

describe("Testes questão 1 - Módulo", () => {
  test("Deve retornar o resultado da divisão do primeiro número pelo segundo.", () => {
    expect(lancarNota(10, 3)).toBe(1);
  });
  test("Deve retornar o resultado da divisão do primeiro número pelo segundo.", () => {
    expect(lancarNota(0, 5)).toBe(0);
  });
  test("Deve retornar um erro se o valor do segundo número for 0.", () => {
    expect(() => lancarNota(5, 0)).toThrow("Não é possível dividir por zero");
  });
});