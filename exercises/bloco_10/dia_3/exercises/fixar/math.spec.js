let { somar, subtrair, multiplicar, dividir } = require('./math');


test('Faça o mock da funcão subtrair e teste sua chamada', () => {
  subtrair = jest.fn();
  subtrair();
  expect(subtrair).toHaveBeenCalled();
});

test('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno.', () => {
  multiplicar = jest.fn()
  .mockReturnValue(10);
  
  multiplicar()
  expect(multiplicar).toHaveBeenCalled();
  expect(multiplicar()).toBe(10);
});

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
  somar = jest.fn()
  .mockImplementation((a, b) => a + b);

  const sumResult = somar(1, 1);
  expect(somar).toHaveBeenCalled();
  expect(sumResult).toBe(2);
  expect(somar).toHaveBeenCalledWith(1, 1);
});

test('Faça o mock da função dividir e implemente um retorno padrão com o valor 15', () => {
  // Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.

  dividir = jest.fn()
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5)
  .mockReturnValue(15)

  expect(dividir()).toBe(2);
  expect(dividir).toHaveBeenCalled();
  expect(dividir()).toBe(5);
  expect(dividir()).toBe(15);
  expect(dividir).toHaveBeenCalledWith();
  expect(dividir).toHaveBeenCalledTimes(3);
});
