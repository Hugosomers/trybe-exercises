function checkBiggestNumber(arrayNum){
  let biggest = [0];
  for(let i = 0; i < arrayNum.length; i += 1){
    if(arrayNum[i] > biggest){
      biggest = arrayNum[i];
    }
  }
  return arrayNum.indexOf(biggest);
}


let integers = [2000, 3, 6, 7000, 10000, 1000];
let right = checkBiggestNumber(integers);
console.log(right);