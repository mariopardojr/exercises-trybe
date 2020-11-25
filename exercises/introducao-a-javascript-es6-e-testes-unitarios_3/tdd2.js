const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (list) => {
  const lengths = [];
  for (index in list) {
    lengths.push(list[index].length);
  }
  return lengths;
} 

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
