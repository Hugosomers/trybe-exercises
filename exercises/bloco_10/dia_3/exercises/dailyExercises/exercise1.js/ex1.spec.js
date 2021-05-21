let randomNumb = require('./ex1');

describe('Testes para a função randomNumb', () => {
  // Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

  test('Retorno padrão como 10', () => {
    randomNumb = jest.fn()
    .mockReturnValue(10)

    expect(randomNumb()).toBe(10);
    expect(randomNumb).toHaveBeenCalled();
    expect(randomNumb).toHaveBeenCalledTimes(1);
  });
})