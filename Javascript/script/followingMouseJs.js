const butterfly = document.querySelector('.butterfly');
const motion = document.querySelector('.motion');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.02;

window.addEventListener('mousemove', e => {
  x = e.pageX;
  y = e.pageY;

  butterfly.style.left = x + 'px';
  butterfly.style.top = y + 'px';
});

const moving = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  motion.style.left = targetX + 'px';
  motion.style.top = targetY + 'px';

  window.requestAnimationFrame(moving);
} 

moving();