// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = [];
let saveNextNumbers;

for(let index = 0; index < numbers.length; index += 1) {
  saveNextNumbers = numbers[index+1];
  if(saveNextNumbers !== undefined){
  numbersMult.push(numbers[index]*saveNextNumbers);
  }else{
    numbersMult.push(numbers[index]*2);
  }
}
console.log(numbersMult);