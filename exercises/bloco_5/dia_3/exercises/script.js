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

