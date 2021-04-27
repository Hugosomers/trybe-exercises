const button = document.getElementById('clickButton');
const p = document.getElementById('showClickCount');

let clickCount = 1;

button.addEventListener('click', () => {
  clickCount += 1;
  p.innerText = clickCount;
});
