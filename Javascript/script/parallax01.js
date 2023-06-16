const images = document.querySelectorAll('.wrapper .img');
const lastImg = document.querySelector('.sub-content .img');

const speed = 0.05;

let scrollNum = 0;
let totalNum = images.length;
let x = 0;
let targetX = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  images.forEach((img, idx) => {
    if (idx < 4) {
      img.style.transform = `translateY(${-scrollNum / (5 * (totalNum - idx))}px)`;
    }
  });
});

window.addEventListener('mousemove', e => {
  x = e.pageX - (window.innerWidth / 2);
})

const smooth = () => {
  targetX += (x - targetX) * speed;

  images[4].style.transform = `scale(1.1) translate(${-targetX / 130}px, ${-scrollNum / (5 * (totalNum - 4))}px)`;
  images[5].style.transform = `scale(1.1) translate(${targetX / 80}px, ${-scrollNum / (5 * (totalNum - 5))}px)`;
  lastImg.style.transform = `scale(1.1) translateX(${-targetX / 30}px)`;

  window.requestAnimationFrame(smooth);
}
smooth();
