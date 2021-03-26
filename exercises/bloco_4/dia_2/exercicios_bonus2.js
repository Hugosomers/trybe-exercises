// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){
  for(let indexB = 0; indexB < index; indexB += 1){
    if(numbers[index] > numbers[indexB]){
      let swap = numbers[index];
      numbers[index] = numbers[indexB];
      numbers[indexB] = swap
    }
  }
}
console.log('Exercício 2');
console.log(numbers);