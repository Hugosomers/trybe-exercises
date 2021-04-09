function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUlList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const singleDay = dezDaysList[index];
    const daysUlListItems = document.createElement('li');
    daysUlListItems.classList.add('day');
    daysUlListItems.innerText = singleDay;
    if (singleDay === 24 ||singleDay === 25 || singleDay === 31) {
      daysUlListItems.classList.add('holiday');
    }
    if (singleDay === 4 || singleDay === 11 || singleDay === 18 || singleDay === 25) {
      daysUlListItems.classList.add('friday');
    }
    daysUlList.appendChild(daysUlListItems);
  }
}

createDays();

function createHolidayBtn (str) {
  const btnContainer = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = str;
  btn.id = 'btn-holiday';
  btnContainer.appendChild(btn);
}

createHolidayBtn('Feriados');

const butn = document.querySelector('#btn-holiday');
butn.addEventListener('click', function(){
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor !== 'rgb(190, 190, 235)') {
      holidays[index].style.backgroundColor = 'rgb(190, 190, 235)';
    } else {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

function createFridayBtn (str) {
  const btnContainer = document.querySelector('.buttons-container');
  const btnForFriday = document.createElement('button');
  btnForFriday.innerText = str;
  btnContainer.appendChild(btnForFriday);
}

createHolidayBtn('Sexta-Feira');
document.getElementsByTagName('button')[1].id = 'btn-friday'

const butnFriday = document.querySelector('#btn-friday');
butnFriday.addEventListener('click', function(){
  const fridays = document.getElementsByClassName('friday');
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText !== 'XABLAU') {
      fridays[index].innerText = 'XABLAU';
    } else {
      fridays[index].innerText = parseInt(fridays[index].nextSibling.innerText) - parseInt(1);
    }
  }
});

let ulDaysList = document.querySelector('#days');
ulDaysList.addEventListener('mouseover', function(event){
  event.target.style.fontSize = '30px';
});
ulDaysList.addEventListener('mouseout', function(event){
  event.target.style.fontSize = '20px';
})

function addCustomTask(str) {
  let spanCreator = document.createElement('span');
  spanCreator.innerText = str;
  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(spanCreator);
}

addCustomTask('Programar');

function addLegendColor(color) {
  let createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;

  let myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(createDiv);
}

addLegendColor('red');
addLegendColor('blue');

let divTask = document.querySelectorAll('.task');

for (let index = 0; index < divTask.length; index += 1){
divTask[index].addEventListener('click', function(){
  if (divTask[index].classList.length === 1){
    divTask[index].classList.add('selected');
  } else if (divTask[index].classList.length > 1) {
    divTask[index].classList.remove('selected');
  }
})
}

ulDaysList.addEventListener('click', function(event){
  let selectedTaskDiv = document.querySelector('.task.selected');
  if (event.target.style.color !== selectedTaskDiv.style.backgroundColor){
    event.target.style.color = selectedTaskDiv.style.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119,119,119)';
  }
});

let addButton = document.querySelector('#btn-add');
let inputBox = document.querySelector('#task-input');


addButton.addEventListener('click', function(){
  if (!inputBox.value) {
    alert('Erro: Compromisso vazio!');
  } else {
    let createCommit = document.createElement('li');
    createCommit.innerText = inputBox.value;
    let getTaskUl = document.querySelector('.task-list');
    getTaskUl.appendChild(createCommit);
  }
});

inputBox.addEventListener('keyup', function(event){
  if (event.keyCode === 13){
    if (!inputBox.value) {
      alert('Erro: Compromisso vazio!');
    } else {
      let createCommit = document.createElement('li');
      createCommit.innerText = inputBox.value;
      let getTaskUl = document.querySelector('.task-list');
      getTaskUl.appendChild(createCommit);
    }
  }
})
