const states = document.querySelector('#states');
const statesAcro = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',];

for (let index = 0; index < statesAcro.length; index += 1) {
  // const optionCreate = document.createElement('option');
  states.innerHTML += `<option id="${statesAcro[index]}" name="${statesAcro[index]}">${statesAcro[index]}</option>`
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

