const prom = new Promise((resolve, reject) => {
  let randomNumArray = [];

  for (let index = 0; index < 10; index += 1) {
    const randomNum = Math.random()* (50 - 1) + 1;
    randomNumArray.push(parseInt((randomNum**2).toFixed(2)));
  }
  // console.log(randomNumArray);
  
  const sumAllNum = randomNumArray.reduce((acc, curr) => acc + curr,0);
  if (sumAllNum < 8000) {
    resolve(sumAllNum);
  }
  reject(sumAllNum);

})
.then((num) => {
  const divideArray = [];
  for (let index = 0; index <= 10; index += 1) {
    if (index === 2 || index === 3 || index === 5 || index === 10) {
      const newNumbers = num / index;
      divideArray.push(parseInt(newNumbers));
    }
  }
  console.log(`Promise resolvida ${num} [${divideArray}]`);
  return divideArray;
})
.then((array) => {
  console.log(`A soma de todo o array de divisões: ${array.reduce((acc, curr) => acc + curr, 0)}`);
})
.catch((num) => console.log(`Promise rejeitada ${num}. É mais de oito mil! Essa promise deve estar quebrada!`))
