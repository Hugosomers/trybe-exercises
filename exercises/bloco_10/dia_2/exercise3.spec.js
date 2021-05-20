// const { describe } = require('yargs');
const { test, expect } = require('@jest/globals');
// const { async } = require('rsvp');
const { getUserName } = require('./exercise3');

describe('Verifica a função getUserName com async/await', () => {
  test('Resolve da função getUserName', async () => {
    const resolve = await getUserName(4);
    expect(resolve).toBe('Mark');
  });

  test('Reject da função getUserName', async () => {
    try {
      await getUserName(7);
    } catch(error) {
      expect(error).toEqual({ error: 'User with ' + 7 + ' not found.' });
    }
  });
});