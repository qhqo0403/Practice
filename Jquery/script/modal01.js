/* $('.modal-notice').click(function() {
  $('.modal').fadeIn();
})
$('#btn-close, .modal').click(function() {
  $('.modal').fadeOut();
});
$('.modal *').click(function(event) {
  event.stopPropagation();
}); */

const notice = document.querySelector('.modal-notice');
const close = document.getElementById('btn-close');
const modal = document.querySelector('.modal');
const content = document.querySelector('.modal-content');

notice.addEventListener('click', () => {
  modal.style.display = 'block';
  setTimeout(() => {
    content.classList.add('active');
  }, 100);
})
const closeModalHandler = (event) => {
  modal.style.display = '';
  content.classList.remove('active');
}

close.addEventListener('click', closeModalHandler);
modal.addEventListener('click', closeModalHandler);
