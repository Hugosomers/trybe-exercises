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

