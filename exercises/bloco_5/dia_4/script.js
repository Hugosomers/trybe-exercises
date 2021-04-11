window.onload = function (){
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

// Requisito 4    
const lineHeight = document.querySelector('.lineheight-button');
const biggerLineHeight = document.querySelector('.biggerlineheight-button');

document.body.style.lineHeight= localStorage.getItem('lineHeight');

lineHeight.addEventListener('click', () =>{
  document.body.style.lineHeight = '1';
  localStorage.setItem('lineHeight', '1');
});

biggerLineHeight.addEventListener('click', () =>{
  document.body.style.lineHeight = '1.3';
  localStorage.setItem('lineHeight', '1.3');
});

// Requisito 5
const fontFamily = document.querySelector('.fontfamily-button');
const arialFFamily = document.querySelector('.arialfontfamily-button');

document.body.style.fontFamily= localStorage.getItem('font');

fontFamily.addEventListener('click', () =>{
  document.body.style.fontFamily = 'Montserrat, sans-serif';
  localStorage.setItem('font', 'Montserrat, sans-serif');
});

arialFFamily.addEventListener('click', () =>{
  document.body.style.fontFamily = 'Arial';
  localStorage.setItem('font', 'Arial');
});
}