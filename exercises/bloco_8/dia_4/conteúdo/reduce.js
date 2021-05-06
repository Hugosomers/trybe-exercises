// Exemplo 1 - A função soma todos os valores de um array
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => {
  console.log(`Esse é o acumulador: ${result}`);
  console.log('+')
  console.log(`Esse é o current: ${number}`);
  console.log('=')
  return result + number;
}); 
console.log(`Esse é o resultado: ${sumNumbers}`); // 113

// O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.

// O parâmetro `number` é o current. Ele recebe, do `array`, o próximo elemento.

// Outra forma de escrever:
// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers);

// ---------------------------------------------------------------------------------------------------------- //

// Exemplo 2 - A função soma todos os valores de um array
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  console.log(number); // 2 3 4 5
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

// ---------------------------------------------------------------------------------------------------------- //

// Exemplo 3 - A função soma todos os valores de um array com o novo parametro do reduce
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(`Esse é o acumulador: ${result}`);// 0 32 47 50 52 47 103
  console.log('+')
  console.log(`Esse é o current: ${number}`); // 32, 15, 3, 2, -5, 56, 10
  console.log('=')
  return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// ---------------------------------------------------------------------------------------------------------- //

// Exemplo 4 - A função soma todos os valores de um array com o novo parametro do reduce sendo somado
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

// ---------------------------------------------------------------------------------------------------------- //
