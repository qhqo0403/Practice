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
};

// 그룹으로 애니메이션 컨트롤
const effects = [];

bars.forEach((bar, idx) => {
  const newOptions = {...options, delay: idx * 100};
  const effect = new KeyframeEffect(bar, keyframes, newOptions);
  effects.push(effect);
});

const groupEffect = new GroupEffect(effects);
const animation = document.timeline.play(groupEffect);

window.setTimeout(() => {
  animation.pause();
}, 10000);
/* bars.forEach((bar, idx) => {
  bar.animate(keyframes, {...options, delay: idx * 100});
}); */

// 순차적으로 애니메이션 재생하기 (iteration 횟수 제한이 있을 때, delay 속성이 필요 없어짐!)

/* const sequenceEffect = new SequenceEffect(effects);
const animation = document.timeline.play(sequenceEffect);
 */
