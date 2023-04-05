const searchBox = document.querySelector('.search');
const clearBtn = document.querySelector('.clear');
const searchBtn = document.querySelector('.icon');
const searchInput = document.querySelector('.input-frame input');
const sections = document.querySelectorAll('section');

searchBtn.addEventListener('click', function() {
  searchBox.classList.toggle('active');
});
clearBtn.addEventListener('click', function() {
  searchInput.value = '';
});
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', function() {
    searchBox.classList.remove('active');
  })
}