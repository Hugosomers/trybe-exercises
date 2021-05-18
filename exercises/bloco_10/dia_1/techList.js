const techList = (arr, name) => {
  if(arr.length === 0) {
    return 'Vazio!';
  }
  const sortedArray = arr.sort();
  return sortedArray.reduce((acc, curr) => {
    acc.push({tech: curr, name: name});
    return acc;
  }, []);
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;
