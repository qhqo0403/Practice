/* const email = $('#email');
const password = $('#password');
const submitBtn = $('.submit-btn');

submitBtn.click(function() {
  if (email.val() === '') {
    email.next('span').addClass('warning');
    setTimeout(function() {
      email.next('span').removeClass('warning');
    }, 1500);
  } else if (password.val() === '') {
    password.next('span').addClass('warning');
    setTimeout(function() {
      password.next('span').removeClass('warning');
    }, 1500);
  }
}); */

const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const submitBtn = document.querySelector('.submit-btn');
const labels = document.querySelectorAll('.input-field span');

let enteredEmail = emailInput.value;
let enteredPw = pwInput.value;

const validInput = (input) => {
  const div = input.closest('div');
  const label = div.querySelector('span');
  label.classList.add('warning');
  setTimeout(() => {
    label.classList.remove('warning');
  }, 1000);
}

const onChangeHandler = (event) => {
  const input = event.target;
  const div = input.closest('div');
  const label = div.querySelector('span');

  if (event.target.value) {
    label.classList.add('valid');
  } else {
    label.classList.remove('valid');
  }
}

emailInput.addEventListener('change', onChangeHandler);
pwInput.addEventListener('change', onChangeHandler);

submitBtn.addEventListener('click', (event) => {
  if (enteredEmail.trim().length === 0) {
    validInput(emailInput);
    return;
  } else if (enteredPw.trim().length === 0) {
    validInput(pwInput);
  }
});
