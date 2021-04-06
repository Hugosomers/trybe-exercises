console.log(document.querySelector('#elementoOndeVoceEsta'));
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'red';
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Adicione um texto a ele.';
console.log(document.querySelector('#pai').firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.firstElementChild);
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[4]);
console.log(document.querySelector('#elementoOndeVoceEsta').parentNode.childNodes[5]);
console.log(document.querySelector('#pai').children[2]);

