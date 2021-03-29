function sumGivenNumber(theNumber){
  let sum = 0;
  for(let i = 1; i <= theNumber; i+=1 ){
      sum += i;
  }
  return sum
}


let n = 5;
console.log(sumGivenNumber(n));