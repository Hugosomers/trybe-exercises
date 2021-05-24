// Crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let randomNumb = require('./ex2');

describe('Exercício 2', () => {
  test('Testes', () => {
    randomNumb = jest.fn()
    .mockImplementationOnce((a, b) => a / b)

    expect(randomNumb(10, 5)).toBe(2);
    expect(randomNumb).toHaveBeenCalledTimes(1);
    expect(randomNumb()).toBe(undefined);
  })
})
