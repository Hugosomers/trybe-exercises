let n = -1;
let strg = '*';
for(let index = 1; index <= n; index += 1 ){
  if (n > 1) {
    console.log(strg.repeat(n));
  }else{
    console.log('O valor de N tem que ser maior que 1');
    break;
  }
}