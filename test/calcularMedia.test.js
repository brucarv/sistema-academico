const { calcularMedia } = require("../src/calcularMedia");

describe("Teste de cálculo de média", () => {
  // Caso de teste: Notas válidas de 1UP e 2UP
  test("Notas válidas de 1UP e 2UP", () => {
    const nota1 = 7.0;
    const nota2 = 8.0;

    const resultado = calcularMedia(nota1, nota2);

    expect(resultado).toBe(7.5);
  });

  test("Notas iguais de 1UP e 2UP", () => {
    const nota1 = 5.0;
    const nota2 = 5.0;

    const resultado = calcularMedia(nota1, nota2);

    expect(resultado).toBe(5.0);
  });

  test("Nota mínima e máxima (0.0 e 10.0)", () => {
    const nota1 = 0.0; // Mínima
    const nota2 = 10.0; // Máxima

    const resultado = calcularMedia(nota1, nota2);

    expect(resultado).toBe(5.0);
  });

  test("Nota de 1UP no limite inferior e nota de 2UP no limite superior", () => {
    const nota1 = 0.0; // Limite inferior
    const nota2 = 7.0; // Limite superior

    const resultado = calcularMedia(nota1, nota2);

    expect(resultado).toBe(3.5);
  });

  test("Nota de 1UP no limite inferior e nota de 2UP no limite superior", () => {
    const nota1 = 8.0;
    const nota2 = 10.0;

    const resultado = calcularMedia(nota1, nota2);

    expect(resultado).toBe(9.0);
  });

  test("Notas inválidas fora do intervalo", () => {
    const nota1 = -1.0;
    const nota2 = 11.0;

    expect(() => calcularMedia(nota1, nota2)).toThrowError(
      "A média deve ser um número entre 0.0 e 10.0."
    );
  });
});
