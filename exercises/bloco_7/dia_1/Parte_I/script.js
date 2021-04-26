// Exercício 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }

}

testingScope(false);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderedArray = (array) => {

  for (let index = 0; index < array.length; index += 1) {
    for (let j = index + 1; j < array.length; j += 1) {
      if (array[index] > array[j]) {
        let arrayPosition = array[index];
        array[index] = array[j];
        array[j] = arrayPosition;
      }
    }
  }
  return array;
}



console.log(`Os números ${orderedArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Exercício 2 - Bônus

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const comparedNumbers = (a, b) => a - b;

console.log(`Os números ${oddsAndEvens.sort(comparedNumbers)} se encontram ordenados de forma crescente!`);
