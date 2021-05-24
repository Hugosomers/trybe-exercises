const { returnUppercase, returnFirstLetter, concatStrings } = require('./ex4');
jest.mock('./ex4');

test('Teste function 1', () => {
  returnUppercase.mockImplementation((str) => str.toLowerCase());
  expect(returnUppercase('OI')).toBe('oi');
});

test('Teste function 2', () => {
  returnFirstLetter.mockImplementation((str) => str.charAt(str.length-1));
  expect(returnFirstLetter('oi')).toBe('i');
});

test('Teste function 2', () => {
  concatStrings.mockImplementation((str1, str2, str3) => str1.concat(str2,str3));
  expect(concatStrings('oi','tchau', 'oi')).toBe('oitchauoi');
  expect(concatStrings).toHaveBeenCalled()
  expect(concatStrings).toHaveBeenCalledWith('oi','tchau', 'oi');
});

