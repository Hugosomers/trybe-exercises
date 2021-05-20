const { test, expect } = require('@jest/globals');
const { uppercase } = require('./exercise1');

test('Verifica callback', (done) => {
  uppercase('oi', (str) => {
    expect(str).toBe('OI');
    done();
  })
});