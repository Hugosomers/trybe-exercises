// Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const reduceArrays = arrays.reduce((acc, cur) => {
    return acc.concat(cur);
  });
  console.log(reduceArrays);
  return reduceArrays;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);