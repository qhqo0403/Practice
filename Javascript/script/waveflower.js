const wrapper = document.querySelector('.wrapper');
const flowers = [];
let flower;

for (let i = 0; i < 60; i++) {
  bar = document.createElement('div');
  bar.className = 'flower';
  wrapper.append(flower);
  bars.push(flower);
}

const keyframes = [
  { transform: 'rotate(0)' },
  { transform: 'rotate(15deg)' },
];
const options = {
  duration: 1000,
  iterations: Infinity,
  easing: 'ease-in-out'
}

flowers.forEach((flower, idx) => {
  bar.animate(keyframes, {...options, delay: idx * 100});
});