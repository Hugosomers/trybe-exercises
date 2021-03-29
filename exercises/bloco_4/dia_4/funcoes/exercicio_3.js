function checkLowestNumber(arrayNum){
  let lowest = arrayNum[0];
  for(let i = 0; i < arrayNum.length; i += 1){
    if(arrayNum[i] < lowest){
      lowest = arrayNum[i];
    }
  }
  return arrayNum.indexOf(lowest);
}


let integers = [2000, 3, 6, -7000, 10000, 1000];
let right = checkLowestNumber(integers);
console.log(right);