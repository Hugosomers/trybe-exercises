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

// Exercício 2

const checkBiggestWord = (phrase) => {
  const phraseArray = phrase.split(' ');
  let wordSize = 0;
  let biggestWord = undefined;
  for (let index = 0; index < phraseArray.length; index += 1) {
    if(phraseArray[index].length > wordSize) {
      wordSize = phraseArray[index].length;
      biggestWord = phraseArray[index];
    }
  }
  return biggestWord;
}

console.log(checkBiggestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));