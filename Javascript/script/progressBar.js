const progressBar = document.querySelector('.progress-bar');

let scrollNum = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  let percent = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0);

  progressBar.style.width = `${percent}%`;
});