// // Exercício 1

const fatorialFunction = (number) => {
  let factorial = 1;
  for (let index = number; index > 0; index -= 1) {
     factorial *= index;
    
  }
  return factorial;
}

console.log(fatorialFunction(6));

// Exercício Bônus

const factorialFunctionTernary = (num) => (num >= 0 && num < 2) ? 1 : factorialFunctionTernary(num - 1) * num;

console.log(factorialFunctionTernary(4));
