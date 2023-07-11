const wrapper = document.querySelector('.wrapper');
const bars = [];
let bar;

for (let i = 0; i < 60; i++) {
  bar = document.createElement('div');
  bar.className = 'bar';
  wrapper.append(bar);
  bars.push(bar);
}

const keyframes = [
  { transform: 'scaleY(0)' },
  { transform: 'scaleY(1)' },
];
const options = {
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'both',
  easing: 'ease-in-out'
}

bars.forEach((bar, idx) => {
  bar.animate(keyframes, {...options, delay: idx * 100});
});