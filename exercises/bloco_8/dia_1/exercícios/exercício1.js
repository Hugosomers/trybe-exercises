const generateEmail = (name) => {
  const arrayName = name.split(' ');
  let email = arrayName.join('_');
  email += `@trybe.com`

  return email.toLowerCase();
  
}
const returnObject = (name) => {
  
  const hire = {
    nomeCompleto: name,
    email: generateEmail(name),
  }

  return hire;
};


const newEmployees = (block) => {
  const employees = {
    id1: block('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: block('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: block('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(returnObject))