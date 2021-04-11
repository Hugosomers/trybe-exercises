// Requisito 1
const nightBtn = document.querySelector('.night-button');
const lightBtn = document.querySelector('.light-button');

document.body.style.backgroundColor = localStorage.getItem('backgroundColor');


nightBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    localStorage.setItem('backgroundColor', 'black');
});

lightBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    localStorage.setItem('backgroundColor', 'white');
});

// Requisito 2
const lightColorBtn = document.querySelector('.lightfontcolor-button');
const darkColorBtn = document.querySelector('.darkfontcolor-button');

document.body.style.color = localStorage.getItem('fontColor');

lightColorBtn.addEventListener('click', () => {
  document.body.style.color = 'white';
  localStorage.setItem('fontColor', 'white');
});

darkColorBtn.addEventListener('click', () => {
  document.body.style.color = 'black';
  localStorage.setItem('fontColor', 'black');
});

// Requisito 3
const biggerFntBtn = document.querySelector('.fontsizeB-button');
const smallerFntBtn = document.querySelector('.fontsizeS-button');

document.body.style.fontSize = localStorage.getItem('fontSize');

biggerFntBtn.addEventListener('click', () => {
  document.body.style.fontSize = '20px';
  localStorage.setItem('fontSize', '20px')
});
smallerFntBtn.addEventListener('click', () => {
  document.body.style.fontSize = '18px';
  localStorage.setItem('fontSize', '18px')
});