// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  
  const returnCount = names.reduce((acc, name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('a')) {
      const splitedName = lowerName.split('');
      splitedName.forEach((letter) => {
        letter === 'a' ? acc += 1 : acc
      });
      return acc;
    }
    
   

  },0);
  return returnCount;
}

assert.deepStrictEqual(containsA(), 20);