let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let anotherInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(let keys in info,anotherInfo){
  if(info[keys] === 'Sim' && anotherInfo[keys] === 'Sim'){
    console.log('Ambas recorrentes');
  }else{
    console.log(info[keys], 'e', anotherInfo[keys]);
  }
}


// Recorri ao google para entender como fazia, não achei nada e recorri
// ao gabarito. Utilizei o DEBUGGER para entender o que estava acontecendo
// e refiz depois de algum tempo para ver se conseguia fazer sozinho.


