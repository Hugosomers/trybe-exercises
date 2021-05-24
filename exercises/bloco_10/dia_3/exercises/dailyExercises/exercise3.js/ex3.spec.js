// Crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

let randomNumb = require('./ex3');

describe('Exercício 3', () => {
  test('Teste 3', () => {
    
    randomNumb = jest.spyOn(randomNumb, 'randomNumb')
    .mockImplementation((a, b, c) => a * b * c );

    expect(randomNumb(1, 1, 0)).toBe(0)
    expect(randomNumb).toHaveBeenCalled()
    
    randomNumb.mockReset()
    .mockImplementation((a) => a*2)

    expect(randomNumb(2)).toBe(4)
    expect(randomNumb).toHaveBeenCalledTimes(1)
  });
});