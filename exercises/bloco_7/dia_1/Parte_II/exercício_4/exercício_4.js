const changeString = (string) => {
  const deliveredString = 'Tryber x aqui!';
  const stringSave = deliveredString.replace('x', string);
  return stringSave;
}

console.log(changeString('Bebeto'));