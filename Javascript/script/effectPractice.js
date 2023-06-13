const [shadow, date, artist, text] = document.querySelectorAll('.wrapper img');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener('mousemove', e => {
  x = e.pageX - (window.innerWidth / 2);
  y = e.pageY - (window.innerHeight / 2);
  return x;
});

const smooth = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  shadow.style.transform = `translate(${targetX / 80}px, ${targetY / 80}px)`;
  date.style.transform = `translate(${targetX / 20}px, ${targetY / 20}px)`;
  artist.style.transform = `translate(${targetX / 45}px, ${targetY / 45}px)`;
  text.style.transform = `translate(${-targetX / 25}px, ${targetY / 25}px)`;
  window.requestAnimationFrame(smooth);
};

smooth();