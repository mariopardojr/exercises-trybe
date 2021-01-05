const sum = require('./sum');

describe('Soma', () => {
  test('A função sum retorna a soma do parâmetro de a com b', () => {
    expect(sum(1, 1)).toBe(1 + 1);
  });
  test('O retorno de sum(4, 5) deve ser 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('O retorno de sum(0, 0) deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('A função deve lançar um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5')
    }).toThrowError(new Error('parameters must be numbers'));
  });
});