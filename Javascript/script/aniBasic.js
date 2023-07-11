// Web Animation API
/* 
someElement.animate([keyframes], {options});
- keyframes 는 배열의 형태이고, 구간은 offset 속성을 사용해서 지정할 수 있음,
  -> offset 은 0 ~ 1 의 값으로 표현
- option 은 animation 의 상세 속성. ex) duration, delay ...
- animate 가 반환하는 animation 객체의 특정 속성은 promise를 반환함

new 생성자를 이용하는 형태

new Animation(new KeyframeEffect(element, [keyframes], {option}))

객체만 만든상태이기 때문에 따로 play 메서드를 적용해야함.
체이닝을 이용해서 바로 play 하거나 생성자를 변수에 담아서 실행
 */
const box = document.querySelector('.box');
const display = document.querySelector('.display');
const btns = document.querySelector('.player');

const keyframes = [
  { transform: 'translate(0)' },
  { transform: 'translate(200%)'}
];
const options = {
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate'
}

const animation = box.animate(keyframes, options);

const actions = (value) => {
  switch (value) {
    case 'play':
      animation.play();
      animation.playbackRate = 1;
      break;
    
    case 'pause':
      animation.pause();
      break;

    case 'faster':
      if (animation.playbackRate === 2) {
        animation.playbackRate = 1;
      } else {
        animation.playbackRate = 2;
      }
      break;
  }
}

btns.addEventListener('click', e => {
  const target = e.target.closest('.btn');
  actions(target.dataset.function);
});