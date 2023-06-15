const text = document.querySelector('p');
const progressBar = document.querySelector('.progress-bar');
const moveImg = document.querySelector('.moveImg');
const bgImg = document.querySelector('.bgImg');

let scrollNum = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  let percent = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0);

  text.innerText = `${scrollNum}m`;
  progressBar.style.width = `${percent}%`;
  moveImg.style.transform = `translateX(${percent * 5}%)`;
  bgImg.style.transform = `translateY(${-percent * 3}%)`;
});