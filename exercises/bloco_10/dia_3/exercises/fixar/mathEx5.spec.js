let math = require('./math');

// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

test('Exercício 5 de fixar', () => {
  const sub = jest.spyOn(math, 'subtrair')
  .mockReturnValue(20)

  expect(sub()).toBe(20)
  expect(sub).toHaveBeenCalledTimes(1);
  
  sub.mockRestore()
  expect(math.subtrair(2, 1)).toBe(1);
});