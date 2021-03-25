let angleA = 60;
let angleB = -59;
let angleC = 60;

let validTri = (angleA + angleB + angleC) === 180

if(validTri === true){
  console.log(validTri);
}else if(angleA < 0 || angleB < 0 || angleC < 0){
  console.log("Erro");
}else{
  console.log(validTri)
}