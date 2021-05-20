const { test, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const { getUserName, findUserById, users} = require('./exercise2');

describe('Verificação da função getUserName', () => {
  test('Verifica se existe o ID', () => {
    expect.assertions(1)
    return getUserName(4).then((result) => {
      expect(result).toEqual('Mark');
    });
  });

  test('Verifica se retorna erro', () => {
    expect.hasAssertions();
    return getUserName(7).catch((error) => {
      expect(error).toEqual({ error: 'User with ' + 7 + ' not found.' });
    });
  });
});
