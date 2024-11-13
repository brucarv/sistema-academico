const { calcularMedia } = require("../src/calcularMedia");

describe('Teste de cálculo de média', () => {

  // Caso de teste: Notas válidas de 1UP e 2UP
  test('Notas válidas de 1UP e 2UP', () => {
      const nota1 = 7.0;
      const nota2 = 8.0;

      // Média correta: (7.0 + 8.0) / 2 = 7.5
      const resultado = calcularMedia(nota1, nota2);
      
      expect(resultado).toBe(7.5);
  });

  // Caso de teste: Notas iguais de 1UP e 2UP
  test('Notas iguais de 1UP e 2UP', () => {
      const nota1 = 5.0;
      const nota2 = 5.0;

      // Média correta: (8.0 + 8.0) / 2 = 8.0
      const resultado = calcularMedia(nota1, nota2);
      
      expect(resultado).toBe(5.0);
  });

  // Caso de teste: Nota mínima e máxima
  test('Nota mínima e máxima (0.0 e 10.0)', () => {
      const nota1 = 0.0;  // Mínima
      const nota2 = 10.0; // Máxima

      // Média correta: (0.0 + 10.0) / 2 = 5.0
      const resultado = calcularMedia(nota1, nota2);
      
      expect(resultado).toBe(5.0);
  });

  // Caso de teste: Nota de 1UP no limite inferior
  test('Nota de 1UP no limite inferior e nota de 2UP no limite superior', () => {
      const nota1 = 0.0;  // Limite inferior
      const nota2 = 7.0; // Limite superior

      // Média correta: (0.0 + 7.0) / 2 = 3.5
      const resultado = calcularMedia(nota1, nota2);
      
      expect(resultado).toBe(3.5);
  });

  // Caso de teste: Nota de 2UP no limite superior
  test('Nota de 1UP no limite inferior e nota de 2UP no limite superior', () => {
    const nota1 = 8.0;  // Limite inferior
    const nota2 = 10.0; // Limite superior

    // Média correta: (8.0 + 10.0) / 2 = 9.0
    const resultado = calcularMedia(nota1, nota2);
    
    expect(resultado).toBe(9.0);
  });

  // Caso de teste: Notas inválidas (fora do intervalo)
  test('Notas inválidas fora do intervalo', () => {
      const nota1 = -1.0;  // Fora do intervalo
      const nota2 = 11.0;  // Fora do intervalo
      
      // Verificando se a função lança um erro para médias fora do intervalo
      expect(() => calcularMedia(nota1, nota2)).toThrowError('A média deve ser um número entre 0.0 e 10.0.');
  });
});