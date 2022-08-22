import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onEmailInput(e) {
  localStorage.setItem(STORAGE_KEY, e.target.value);
  console.log(e.target.value);
}

function onFormInput(e) {
  console.log(e.target.value);
}

form.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(onEmailInput, 500));
form.addEventListener('input', onFormInput);

function autofill() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log(savedData);
  if (savedData) {
    console.log('yes');
    emailInput.value = savedData;
    // messageInput.value = savedData;
  }
}

autofill();
