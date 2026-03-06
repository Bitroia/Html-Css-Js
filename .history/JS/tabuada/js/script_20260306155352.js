//! Selecão de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

//! Funções

function createTable = (number, multi)

//! Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;

  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationInput || !multiplicatorNumber) return;

  console.log(multiplicationNumber, multiplicatorNumber);
});
