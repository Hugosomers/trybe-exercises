let bruteWage;
let inssDiscounted;
let liquidWage;

bruteWage = 3000;
// INSS
if(bruteWage <= 1556.94){
  inssDiscounted = bruteWage - (bruteWage * 0.08);
  
}else if(bruteWage <= 2594.92){
  inssDiscounted = bruteWage - (bruteWage * 0.09);
  
}else if(bruteWage <= 5198.82){
  inssDiscounted = bruteWage - (bruteWage * 0.11);
  
}else if(bruteWage > 5198.82){
  inssDiscounted = bruteWage - 570.88;
  
}else{
  console.log("Valor inválido");
}

// IR
if(inssDiscounted <= 1903.98){
  liquidWage = inssDiscounted;
  console.log("Sem impostos");
}else if(inssDiscounted <= 2826.65){
  liquidWage = inssDiscounted - ((inssDiscounted * 0.075) - 142.80);
  
}else if(inssDiscounted <= 3751.05){
  liquidWage = inssDiscounted - ((inssDiscounted * 0.15) -354.80);
  
}else if(inssDiscounted <= 4664.68){
  liquidWage = inssDiscounted - ((inssDiscounted * 0.225)-636.13);
  
}else if(inssDiscounted > 4664.68){
  liquidWage = inssDiscounted - ((inssDiscounted * 0.275) - 869.36);
  
}else{
  console.log("Valor inválido");
}

console.log("O salário líquido é:",liquidWage);