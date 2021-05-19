const { encode, decode } = require('./encode-decode');

describe('Verifica se são funções', () => {
  test('Verifica função encode', () => {
    expect(typeof encode).toBe('function');
  });
  test('Verifica função decode', () => {
    expect(typeof decode).toBe('function');
  });
});

describe('Verifica função encode', () => {
  test('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5 ', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    expect(encode('b, y, t, h, j')).toBe('b, y, t, h, j');
  })
});

describe('Verifica função decode', () => {
  test('Teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u ', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    expect(decode('1, 8, 7, 9, 6')).toBe('a, 8, 7, 9, 6');
  })
});