let father = document.querySelector('#pai');
let whereIam = document.querySelector('#elementoOndeVoceEsta');

father.removeChild(document.querySelector('#primeiroFilho'));
father.removeChild(document.querySelector('#terceiroFilho'));
father.removeChild(document.querySelector('#quartoEUltimoFilho'));
whereIam.removeChild(document.querySelector('#segundoEUltimoFilhoDoFilho'));
console.log(father.childNodes);
father.removeChild(father.childNodes[3]);

console.log(father);