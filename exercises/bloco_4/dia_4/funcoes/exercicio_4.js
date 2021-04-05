function checkBiggestName(listOfNames){
  let biggestName = listOfNames[0];

  for(let i = 0; i < listOfNames.length; i+= 1){
    if(listOfNames[i].length > biggestName.length){
      biggestName = listOfNames[i];
    }
  }
  return biggestName;
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let and = checkBiggestName(names);
console.log(and);