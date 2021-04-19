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


let picker = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "D/Mm/YYYY",
  toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    // dateString is the result of `toString` method
    const parts = dateString.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});
