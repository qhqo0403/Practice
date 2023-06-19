// 유튜브 참고
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const TOTALPETALS = 200;
const petalArr = [];
const petalImg = new Image();
petalImg.src = "../img/petal.png";
petalImg.onload = () => {
  for (let i = 0; i < TOTALPETALS; i++) {
    petalArr.push(new Petal());
  }
  console.log(petalArr);
  render();
}

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petalArr.forEach(petal => {
    petal.animate();
  })

  window.requestAnimationFrame(render);
}


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height
    this.w = 30 + Math.random() * 15;
    this.h = 20 + Math.random() * 10;
    this.opacity = this.w / 45;
    this.xSpeed = 2 + Math.random();
    this.ySpeed = 1 + Math.random() * 0.5;
    this.flip = Math.random();
    this.flipSpeed = Math.random() * 0.01;
  }

  draw() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.x = -petalImg.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height
      this.xSpeed = 2 + Math.random();
      this.ySpeed = 1 + Math.random() * 0.5;
      this.flip = Math.random();
      this.flipSpeed = Math.random() * 0.01;
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(petalImg, this.x, this.y, this.w * (0.66 + (Math.abs(Math.cos(this.flip)) / 3)), this.h * (0.8 + (Math.abs(Math.sin(this.flip))/ 2)) );
  }

  animate() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.draw();
    this.flip += this.flipSpeed;
  }
};