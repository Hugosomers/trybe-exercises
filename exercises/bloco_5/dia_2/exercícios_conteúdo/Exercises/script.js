// Exercício 1
function createElement(elementName) {
  return document.createElement(elementName);
}
let element1 = createElement('h1');
element1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(element1);

// Exercício 2
element = createElement('div');
element.className = 'main-content';
document.querySelector('body').appendChild(element);

// Exercício 3
element = createElement('div');
element.className = 'center-content';
document.querySelector('.main-content').appendChild(element);

// Exercício 4
let element2 = createElement('p');
element2.innerText = 'Algum texto';
document.querySelector('.center-content').appendChild(element2);

// Exercício 5
element = createElement('div');
element.className = 'left-content';
document.querySelector('.main-content').appendChild(element);

// Exercício 6
element = createElement('div');
element.className = 'right-content';
document.querySelector('.main-content').appendChild(element);

// Exercício 7
element = createElement('img');
element.className = 'small-image';
element.src = 'https://picsum.photos/200'
document.querySelector('.left-content').appendChild(element);

// Exercício 8
let element3;
let size = 10;
for (let index = 1; index <= size; index += 1) {
  element3 = createElement('li');
  switch (index) {
    case 1:
      element3.innerText = 'um';
      break;
    case 2:
      element3.innerText = 'dois';
      break;
    case 3:
      element3.innerText = 'três';
      break;
    case 4:
      element3.innerText = 'quatro';
      break;
    case 5:
      element3.innerText = 'cinco';
      break;
    case 6:
      element3.innerText = 'seis';
      break;
    case 7:
      element3.innerText = 'sete';
      break;
    case 8:
      element3.innerText = 'oito';
      break;
    case 9:
      element3.innerText = 'nove';
      break;
    case 10:
      element3.innerText = 'dez';
      break;

  }
  document.querySelector('.right-content').appendChild(element3);
}

// Exercício 9
let element4;
for (let index = 1; index <= 3; index += 1) {
  element4 = createElement('h3');
  document.querySelector('.main-content').appendChild(element4);
}

// Exercício 1 - Parte 2
element1.className = 'title';
