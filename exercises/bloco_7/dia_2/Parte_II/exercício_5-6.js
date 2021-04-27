const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

const sumStudents = (obj) => {

  let totalStudents = 0;
  const keys = Object.keys(allLessons);

  for (let index in keys) {
    totalStudents += obj[keys[index]].numeroEstudantes
  }

  return totalStudents;
}

console.log(sumStudents(allLessons));