const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


divDois.addEventListener('click', function() {
  divDois.className = 'tech';
  divUm.classList.remove('tech');
});

input.addEventListener('keyup', function() {
  const tech = document.querySelector('.tech');
  tech.innerText = 'Texto do elemento alterado';
});

myWebpage.addEventListener('dblclick', function() {
  window.open('https://hugosomers.github.io/', '_blank');
});

myWebpage.addEventListener('mouseover', function() {
  myWebpage.style.color = 'red';
  if (myWebpage.style.color === 'red') {
    myWebpage.style.color = 'white';
  }
});

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.