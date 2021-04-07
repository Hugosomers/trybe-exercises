let pai = document.querySelector('#pai');
let createDiv = document.createElement('div');
pai.appendChild(createDiv);
console.log(pai);

let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
ondeEstou.appendChild(createDiv);
console.log(ondeEstou);

let primeiroFilhodoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhodoFilho.appendChild(createDiv);
console.log(primeiroFilhodoFilho);

let access = document.querySelector('#primeiroFilhoDoFilho').firstChild.parentNode.parentNode.nextSibling.nextSibling;
console.log(access);