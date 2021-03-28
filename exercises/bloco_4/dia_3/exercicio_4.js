let n = 3;
for (let index = 1; index <= n; index+=1) {
  let spc = ' '.repeat(n-index);
  let ast = '*'.repeat(2*index - 1);
  console.log(spc + ast);
}