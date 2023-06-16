const images = document.querySelectorAll('.wrapper .img');

let scrollNum = 0;
let totalNum = images.length;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  images.forEach((img, idx) => {
    img.style.transform = `perspective(1000px) translate3d(0, 0, ${scrollNum / (5 * (totalNum - idx))}px)`;
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
    scrollTo(0, 0);
  }, 100)
});