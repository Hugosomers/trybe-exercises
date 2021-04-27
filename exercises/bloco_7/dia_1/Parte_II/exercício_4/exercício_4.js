const changeString = (string) => {
  const deliveredString = 'Tryber x aqui!';
  const stringSave = deliveredString.replace('x', string);
  return stringSave;
}

// const returnFunction1 = ;
// console.log(returnFunction1);

const skills = ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'BootStrap'];

const mixAll = (returnFunction1) => {
  const sortedSkills = skills.sort();
  const lastWords = `Minhas cinco principais habilidades são:`;
  const everything = `${changeString('Hugo')} ${lastWords} ${sortedSkills.toString()}`;
  return everything;
  
}

console.log(mixAll());