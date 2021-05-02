const checkNumber = (prizeNumber, game) => {
  if (prizeNumber === game) {
    return true;
  }
  return false;
}

const lottery = (block, game) => {
  const prizeNumber = Math.floor(Math.random() * 5) + 1;
  console.log(prizeNumber);
  if (block(prizeNumber, game) === true) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
};

console.log(lottery(checkNumber, 5));