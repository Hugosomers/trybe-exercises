const assert = require('assert');

const wordLengths = (wordsArray) => {

  const lengthArray = [];

  for (let index = 0; index < wordsArray.length; index += 1) {
    let saveLength = wordsArray[index].length;
    lengthArray.push(saveLength);
  }

  return lengthArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);