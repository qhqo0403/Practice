const track = document.querySelector('.track');
const car = document.querySelector('.car');

const animation = car.animate([
  { offsetDistance: 0 },
  { offsetDistance: '100%' }
], {
  duration: 5000,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'ease-in-out'
});

// 아래와 같이 쓰지 않고 체이닝으로 연결하면 animation 객체가 생성되지 않아서 인식이 안됨 
animation.pause();

track.addEventListener('click', () => {
  if (animation.playState === 'paused') {
    animation.play();
  } else if (animation.playState === 'running') {
    animation.pause();
  }
});
