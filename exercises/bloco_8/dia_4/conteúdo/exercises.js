// Exercício 1

// Biggest number with for
const numbers = [50, 85, -30, 3, 15];

for (let index = 0; index < numbers.length; index += 1) {
  let bigger = numbers[0];
  if (numbers[index] > bigger) {
    bigger = numbers[index];
    console.log(bigger);
  }
}
// Biggest number with reduce
const biggestNumber = numbers.reduce((acc, current) => {
  if (current > acc) {
    acc = current;
  }
  return acc;
});

console.log(biggestNumber);

// Biggest number with reduce - Trybe
// const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// ---------------------------------------------------------------------------------------------------------- //
// Exercício 2

// Função que some todos os números pares do array - reduce e filter
const numbersTwo = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenArray = numbersTwo.filter((number) => number % 2 === 0);
// console.log(evenArray);
const sumEvenArray = evenArray.reduce((acc, cur) => acc + cur)
// console.log(sumEvenArray);

// Função que some todos os números pares do array - reduce e filter - Trybe
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

// Função que some todos os números pares do array - reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEvenNumbers = numbers.reduce((acc, cur) => {
  if (cur % 2 === 0 ) {
    acc += cur;
  }
  return acc;
}, 0);

console.log(sumEvenNumbers);

// Função que some todos os números pares do array - reduce - Trybe
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

// ---------------------------------------------------------------------------------------------------------- //
// Exercício 3

// Mostrar na tela um relatório que diz em qual matéria o estudante foi melhor
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const bestSubjects = estudantes.map((student) => {
  return {
    name: student.nome,
    materia: student.materias.reduce((acc, cur) => {
      if (acc.nota > cur.nota) {
        return acc;
      } else {
        return cur;
      }
    }).name
  }
});

console.log(bestSubjects);

// Mostrar na tela um relatório que diz em qual matéria o estudante foi melhor - Trybe

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
      name: student.nome,
      materia: student.materias.reduce(getBestClass).name,
    }));

console.log(reportBetter(estudantes));
