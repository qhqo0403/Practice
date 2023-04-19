const email = $('#email');
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
});