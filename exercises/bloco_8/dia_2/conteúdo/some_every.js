// array.some
const listNames = ['Noão', 'Luca', 'Porge', 'Hugo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('H', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// array.every
const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));