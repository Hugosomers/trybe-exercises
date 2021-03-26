let n = 5;
let ast = '*';
let spc = ' ';

for(let i = 1; i <= n; i += 1 ){
  console.log(spc.repeat(n-i) + ast.repeat(i));
}
