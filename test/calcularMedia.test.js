const { calcularMedia } = require("../src/calcularMedia");

describe("Teste de cálculo de média", () => {
  test("Notas válidas de 1UP e 2UP", () => {
    expect(calcularMedia(7.0, 8.0)).toBe(7.5);
  });

  test("Notas iguais de 1UP e 2UP", () => {
    expect(calcularMedia(5.0, 5.0)).toBe(5.0);
  });

  test("Nota mínima e máxima (0.0 e 10.0)", () => {
    expect(calcularMedia(0.0, 10.0)).toBe(5.0);
  });

  test("Nota de 1UP no limite inferior e nota de 2UP no limite superior", () => {
    expect(calcularMedia(0.0, 7.0)).toBe(3.5);
  });

  test("Nota de 1UP no limite inferior e nota de 2UP no limite superior", () => {
    expect(calcularMedia(8.0, 10.0)).toBe(9.0);
  });

  test("Notas inválidas fora do intervalo", () => {
    const nota1 = -1.0;
    const nota2 = 11.0;

    expect(() => calcularMedia(nota1, nota2)).toThrowError(
      "A média deve ser um número entre 0.0 e 10.0."
    );
  });
});
