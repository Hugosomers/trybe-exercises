function repeaterNumber(numbers){
  let cont;
  let storageCountRepeat = 0;
  let theNumber;
  
    for(let i = 0; i < numbers.length; i+=1){
      cont = 1;
  
      for(let j = i+1; j < numbers.length; j+=1){
        if(numbers[i] === numbers[j]){
          cont += 1;
        }
      }
  
      if(cont > storageCountRepeat){
        storageCountRepeat = cont;
        theNumber = numbers[i];
      }
  
    }
  return theNumber
  
  }
  
  let numbersArray = [2, 5, 2, 5, 8, 2, 5, 5, 10, 5];
  
  console.log(repeaterNumber(numbersArray));