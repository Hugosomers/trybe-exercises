const prom = () => {
  let randomNumArray = [];

  for (let index = 0; index < 10; index += 1) {
    const randomNum = Math.random()* (50 - 1) + 1;
    randomNumArray.push(parseInt((randomNum**2).toFixed(2)));
  }
  
  const sumAllNum = randomNumArray.reduce((acc, curr) => acc + curr,0);
  if (sumAllNum < 8000) {
    return sumAllNum;
  }
  throw new Error();
}

const result = (sum) => [2, 3, 5, 10].map((each) => parseInt(sum / each)).reduce((acc, curr) => acc + curr,0);


const asyncFunction = async () => {
  try {
    const aleatorio = await prom();
    console.log(aleatorio);
    console.log(result(aleatorio));
  }
  catch (error) {
    console.log('Xablau');
  }
}
asyncFunction();
