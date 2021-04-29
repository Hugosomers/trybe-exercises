const assert = require('assert');

const sumAllNumbers = (numbersArray) => {

  let sum = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    sum += numbersArray[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);