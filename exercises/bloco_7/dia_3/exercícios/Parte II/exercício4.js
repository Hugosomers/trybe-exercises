const assert = require('assert');

const findTheNeedle = (array, word) => {
  let saveIndex = 0;
  for (let index in array) {
    if (word === array[index]) {
      saveIndex = array.indexOf(array[index]) - saveIndex;
      
    } else if (array.includes(word) === false){
      saveIndex = -1;
    }
  }

  return saveIndex;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);