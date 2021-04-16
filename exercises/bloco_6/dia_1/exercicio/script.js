const states = document.querySelector('#states');
const statesAcro = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];

for (let index = 0; index < statesAcro.length; index += 1) {
  // const optionCreate = document.createElement('option');
  states.innerHTML += `<option id="${statesAcro[index]}" name="${statesAcro[index]}">${statesAcro[index]}</option>`
}

const date = document.querySelector('#date').value;
const dateString = date.split('/');

if (dateString[0]) {
  const dayInt = parseInt(dateString[0]);
  if (dayInt <= 0 || dayInt > 31) {
    alert('Dia invalido');
  }
}
if (dateString[1]) {
  const monthInt = parseInt(dateString[1]);
    if (monthInt <= 0 || monthInt > 12) {
      alert('Mês invalido');
    }
  }
if (dateString[2]) {
const yearInt = parseInt(dateString[2]);
  if (yearInt <= 0) {
    alert('Ano invalido');
  }
}

const submit = document.querySelector('#submitBttn');
const form = document.getElementById('form');
const formallData = document.getElementById('alldata');

submit.addEventListener('click', (event) => {
  // event.preventDefault();
  const formData = new FormData(form);

  for (let index of formData.entries()) {
    const createP = document.createElement('p');
    createP.innerText = `${index[0]}: ${index[1]}`
    formallData.appendChild(createP);
  }
});

const resetBttn = document.querySelector('#clearBttn');

resetBttn.addEventListener('click', () => {
  formallData.innerHTML = '';
});