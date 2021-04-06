// Exercício 1
function createElement(elementName) {
  return document.createElement(elementName);
}
let element = createElement('h1');
element.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(element);

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