let n = 3;
for(let i = 1; i <= n; i +=1){
  let spc = ' '.repeat(n-i);
  let ast = '*'.repeat(i*2-1);
  console.log(spc + ast + spc);
}