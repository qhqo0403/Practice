// 별도의 파일에 class를 만들었을 때에는 export 한 다음 import해서 사용하는 점!
class Star {
  constructor(num) {
    this.starEl = document.createElement('div');
    this.starEl.className = 'star';
    document.body.append(this.starEl);
  }
};

const numberOfStar = 200;
const spaceWidth = window.innerWidth;
const spaceHeight = window.innerHeight;
// window의 높이로 임시지정
const zValue = spaceHeight;
const effects = [];

let star;
let x, y, z;
let pointFrom, pointTo;
let keyframs, options;

const set3DPoint = (x, y, z) => {
  const scale = zValue / (zValue + z);
  const x2D = x * scale + (spaceWidth * 0.5);
  const y2D = y * scale + (spaceHeight * 0.5);

  return {x2D, y2D, scale};
};


for (let i = 0; i < numberOfStar; i++) {
  x = Math.random() * spaceWidth - (spaceWidth * 0.5);
  y = Math.random() * spaceHeight - (spaceHeight * 0.5);
  z = Math.random() * zValue;

  // 시작값 세팅
  pointFrom = set3DPoint(x, y, z);
  // 끝값 세팅
  pointTo = set3DPoint(x, y, z - zValue);

  star = new Star(i);

  keyframs = [
    {transform: `translate(${pointFrom.x2D}px, ${pointFrom.y2D}px) scale(${pointFrom.scale})`},
    {transform: `translate(${pointTo.x2D}px, ${pointTo.y2D}px) scale(${pointTo.scale})`}
  ];
  options = {
    duration: 1000 / pointFrom.scale,
    iterations: Infinity,
    fill: 'both',
    easing: 'linear'
  };

  effects.push(new KeyframeEffect(star.starEl, keyframs, options));
};

const groupEffect = new GroupEffect(effects);
const animation = document.timeline.play(groupEffect);
