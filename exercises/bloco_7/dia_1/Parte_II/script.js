// Exercício 1

const fatorialFunction = (number) => {
  let factorial = 1;
  for (let index = number; index > 0; index -= 1) {
     factorial *= index;
    
  }
  return factorial;
}

console.log(fatorialFunction(4));

// Exercício Bônus

