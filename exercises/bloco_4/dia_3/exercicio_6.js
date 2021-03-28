let number = 643;
let quant = 0;

for(let index = 0; index <= number; index+=1){
  if (number % index === 0) {
    quant += 1;
  }
}

if(quant === 2){
  console.log('O número é primo');
  console.log('Divisores: '+quant);
}else{
  console.log('O número não é primo');
}


