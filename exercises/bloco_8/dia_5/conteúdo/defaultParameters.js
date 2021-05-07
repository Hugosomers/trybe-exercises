// O que aconteceria sem.
const greeting = user => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// O que acontece com
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// Exercício de fixação
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));