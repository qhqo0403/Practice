const cursor = document.querySelector('.cursor');
const circle = document.querySelector('.circle');
const hoverBtns = document.querySelectorAll('.bottom a');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;

hoverBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    circle.style.transform = "scale(0.2)";
    circle.style.backgroundColor = "rosybrown";
  });
  btn.addEventListener('mouseleave', () => {
    circle.style.transform = "scale(1)";
    circle.style.backgroundColor = null;
  });
});


window.addEventListener('mousemove', e => {
  x = e.pageX;
  y = e.pageY;
});

const reaction = () => {
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  window.requestAnimationFrame(reaction);
};
reaction();
