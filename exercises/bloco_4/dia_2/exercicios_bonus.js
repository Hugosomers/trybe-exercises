// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for(let indexB = 0; indexB < index; indexB += 1){
    if(numbers[index] < numbers[indexB]){
      let swap = numbers[indexB];
      numbers[indexB] = numbers[index];
      numbers[index] = swap
    }
  }
}
console.log('Exercício 1');
console.log(numbers);

// Exercício 2