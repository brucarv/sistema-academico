const { lancarNota } = require("../src/lancamentoNotas");

describe('Teste de lançamento de notas', () => {

  // Caso de teste: Nota válida de 1UP e 2UP
  test('Nota válida de 1UP e 2UP', () => {
      
      // Verificando se as notas retornadas são as mesmas que foram passadas
      expect(lancarNota(7.5, 8.2)).toEqual({ nota1, nota2 });
  });

  // Caso de teste: Nota 1UP fora do intervalo
  test('Nota 1UP fora do intervalo', () => {  
      // Verificando se a função lança um erro para a nota inválida de 1UP
      expect(() => lancarNota(-1.0, 8.2)).toThrow('Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
  });

  // Caso de teste: Nota 2UP fora do intervalo
  test('Nota 2UP fora do intervalo', () => { 
      // Verificando se a função lança um erro para a nota inválida de 2UP
      expect(() => lancarNota(7.5, 12.0)).toThrow('Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
  });

  // Caso de teste: Nota com mais de uma casa decimal
  test('Nota de 1UP com mais de uma casa decimal', () => {  
      // Verificando se a função lança um erro devido à nota de 1UP
      expect(() => lancarNota(7.567, 8.2)).toThrow('Nota de 1UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
  });

  // Caso de teste: Nota 1UP e 2UP inválidas
  test('Nota de 2UP com mais de uma casa decimal', () => {
      // Verificando se a função lança erro para ambas as notas
      expect(() => lancarNota(7.5, 8.256)).toThrow('Nota de 2UP inválida. A nota deve ser um número entre 0.0 e 10.0 com uma casa decimal.');
  });

  test('Entradas não numéricas', () => {
    // Verificando se a função lança um erro para entrada não numérica
    expect(() => lancarNota("sete", 8.2)).toThrow('Entradas devem ser numéricas');
});
});
