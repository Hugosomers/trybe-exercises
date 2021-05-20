const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
  { name: 'Migalha', age: 5, type: 'Owl' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const list = Animals.filter((animal) => animal.age === age);
      if (list.length !== 0) return resolve(list);
      return reject('Nenhum animal com essa idade!');
    }, 1000);
   
  });
};

const getAnimal = (age) => {
    return findAnimalByAge(age).then(animal => animal);
};
  
describe('Quando existe animais com a idade passada', () => {
  test('Retorna um array de objetos', () => {
    expect.assertions(1);
    return expect(getAnimal(5)).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }, { name: 'Migalha', age: 5, type: 'Owl' }]);
  });
});

describe('Quando não existe animais com a idade passada', () => {
  test('Retorna um erro', () => {
    expect.hasAssertions();
    return expect(getAnimal(20)).rejects.toBe('Nenhum animal com essa idade!');
  });
})