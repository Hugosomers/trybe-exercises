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

const subject = 'Matemática';
const teacher = 'Maria Clara'

const studentCount = (obj, subject) => {
  const lessons = Object.values(obj);
  let studentsCount = 0;

  for (let index in lessons) {
    if (lessons[index].materia === subject) {
      studentsCount += lessons[index].numeroEstudantes;
    }
  }
  return studentsCount;
}

const studentsCountFunction = studentCount(allLessons, subject);

const getTeacher = (obj, subject, teacher) => {
  const lessons = Object.values(obj);

  for (let index in lessons) {
    if (lessons[index].professor === teacher) {
      return teacher;
    }
  }
}

const teacherFunction = getTeacher(allLessons, subject, teacher);

const createObject = (teacher, subject, students) => {
  const newObject = {
    professor: teacher,
    aula: subject,
    estudantes: students
  };
  return newObject;
}

console.log(createObject(teacherFunction, subject, studentsCountFunction));