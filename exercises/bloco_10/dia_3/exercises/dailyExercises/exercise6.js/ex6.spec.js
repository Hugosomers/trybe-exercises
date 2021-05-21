let ex6 = require('./ex6')
ex6.fetchFunction = jest.fn()

test('Exercício 6 - Resolves', async () => {
  ex6.fetchFunction.mockResolvedValue('request sucess');
  ex6.fetchFunction()
  expect(ex6.fetchFunction).toHaveBeenCalled();
  
});

test('Exercício 6 - Rejects', async () => {
  ex6.fetchFunction.mockRejectedValue('request failed');
})