const [bg, wood, flowerWood, flowers, leafs, b_leaf01, b_leaf02, b_leaf03] = document.querySelectorAll('.wrapper img');

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener('mousemove', e => {
  x = e.pageX - (window.innerWidth / 2);
  y = e.pageY - (window.innerHeight / 2);
  console.log( x, y)
});

const smooth = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  wood.style.transform = `translate(${targetX / 80}px, ${targetY / 80}px)`;
  flowerWood.style.transform = `translate(${-targetX / 60}px, ${-targetY / 60}px)`;
  flowers.style.transform = `translate(${targetX / 40}px, ${targetY / 40}px)`;
  leafs.style.transform = `translate(${targetX / 10}px, ${targetY / 10}px)`;
  b_leaf01.style.transform = `translate(${targetX / 50}px, ${targetY / 50}px)`;
  b_leaf02.style.transform = `translate(${-targetX / 20}px, ${-targetY / 20}px)`;
  b_leaf03.style.transform = `translate(${targetX / 20}px, ${targetY / 20}px)`;

  window.requestAnimationFrame(smooth);
}

smooth();