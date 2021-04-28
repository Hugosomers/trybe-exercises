const lessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  },
  
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  },

  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  },

}

const subject = Object.values(lessons);
const key = 'materia';
const value = 'Matemática';

const countMathStudents = (subject, key, value) => {
  let studentsCount = 0;

  for (let index in subject) {
    if (subject[index][key] === value) {
      studentsCount += subject[index].numeroEstudantes;
    }
  }
 return studentsCount;
}

console.log(countMathStudents(subject, key, value));