const hydrate = (string) => {
  let sumNum = 0;
  const splited = string.split(' ');
  splited.forEach(element => {
    if(parseInt(element)) sumNum += parseInt(element);
  });
  if (sumNum === 1) return `${sumNum} copo de água`;
  return `${sumNum} copos de água`;
}

module.exports = hydrate;
