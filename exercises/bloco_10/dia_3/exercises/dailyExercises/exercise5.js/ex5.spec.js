let ex5 = require('./ex5');

test('Exercise 5', () => {
  returnUppercase = jest.spyOn(ex5, 'returnUppercase')
  .mockImplementation((str) => str.toLowerCase());
  expect(returnUppercase('OI')).toBe('oi');

  ex5.returnUppercase.mockRestore();
  expect(ex5.returnUppercase('oi')).toBe('OI');
  expect(returnUppercase('oi')).toBe(undefined);
})