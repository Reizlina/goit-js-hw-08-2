import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

//
autofill();

function autofill() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!savedData) {
    return;
  }

  Object.entries(savedData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.target;
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const obj = {
    email: form.email.value,
    message: form.message.value,
  };
  console.log(obj);
  form.email.value;

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
