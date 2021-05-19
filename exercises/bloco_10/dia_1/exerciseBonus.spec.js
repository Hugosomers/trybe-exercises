const { searchEmployee } = require('./exerciseBonus');

test('Verifica se a function existe', () => {
  expect(typeof searchEmployee).toBe('function');
});

describe('Verificações da função', () => {

  test('Verifica caso o ID seja inválido', () => {
    expect(searchEmployee('4678-10')).toBe('ID não identificada');
  });

  test('Verifica caso o ID seja válido', () => {
    expect(searchEmployee('4678-2')).toEqual({
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    });
  });

  test('Verifica caso o ID seja válido e receba algum detail válido', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toContain('Ruby');
  });

  test('Verifica caso o ID seja válido e receba algum detail válido', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual('9852-2-2, Ruby,SQL');
  });
})