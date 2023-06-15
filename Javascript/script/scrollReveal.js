const header = document.querySelector('header');
const progressBar = document.querySelector('.bar');
const visual = document.querySelector('.visual');
const visualHeight = visual.getBoundingClientRect().height;
const opacity = document.querySelector('.opacity');
const visualTitle = document.querySelector('.title')

let scrollNum = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  let percent = ((scrollNum / (document.body.scrollHeight + visualHeight - window.innerHeight)) * 100).toFixed(0);

  progressBar.style.width = `${percent}%`;

  if (scrollNum >= visualHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
    visualTitle.style.top = `${-scrollNum / 10}px`;
    visual.style.backgroundPosition = `center ${-scrollNum / 20}px`;
    opacity.style.background = `rgba(0, 0, 0, ${0.2 + scrollNum / 1000})`;
  }
})