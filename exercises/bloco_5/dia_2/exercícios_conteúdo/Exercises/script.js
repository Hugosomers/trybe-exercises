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

