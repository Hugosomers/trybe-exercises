/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3 Crie uma função que mude a cor do quadrado vermelho para branco.
4 Crie uma função que corrija o texto da tag <h1>.
5 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Exercício 1
document.getElementsByTagName('p')[1].innerText = 'Onde eu me vejo daqui a 2 anos';
// Exercício 2
document.getElementsByTagName('div')[0].style.backgroundColor = 'rgb(76,164,109)';
// Exercício 3
document.getElementsByTagName('div')[1].style.backgroundColor = 'white';
// Exercício 4
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
// Exercício 5
let saveLength = document.getElementsByTagName('p').length;
for (let index = 0; index < saveLength; index += 1) {
  document.getElementsByTagName('p')[index].style.textTransform = 'uppercase';
}
// Exercício 6
for (let index2 = 0; index2 < saveLength; index2 += 1) {
console.log(document.getElementsByTagName('p')[index2].innerText);
}