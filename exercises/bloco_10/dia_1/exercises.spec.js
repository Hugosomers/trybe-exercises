const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./exercises');

describe('Função sum', () => {
  test('Verifica se a função sum existe', () => {
    expect(typeof sum).toBe('function');
  });
  test('Verificação de entradas da função sum', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('Verificação de erro da função sum', () => {
    expect(() => {sum(4, '5')}).toThrow();
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Função myRemove', () => {
  test('Verifica se a função existe', () => {
    expect(typeof myRemove).toBe('function');
  });

  test('Verificação de entradas da função myRemove', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    const array = [3, 2, 1, 0];
    myRemove(array, 3);
    expect(array).toEqual([3, 2, 1, 0]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});

describe('Função myRemoveWithoutCopy', () => {
  test('Verifica se a função existe', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  test('Verificação de entradas da função myRemoveWithoutCopy', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    const removedArray = [1, 2, 3, 4, 5];
    myRemoveWithoutCopy(removedArray, 3);
    expect(removedArray).toEqual([1, 2, 4, 5]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })

});

describe('Função myFizzBuzz', () => {
  test('Verifica se a função existe', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  test('Verifica entradas da função myFizzBuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('oi')).toBe(false);
  });
});

describe('Objetos', () => {
  test('Verifica igualidade de objetos', () => {
    expect(obj1).toEqual(obj2);
    expect(obj2).not.toEqual(obj3);
  });
});