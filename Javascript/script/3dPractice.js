(() => {
  const space = document.querySelector('.space');
  const progressBar = document.querySelector('.progress-bar');
  const stage = document.querySelector('.stage');

  const mousePos = {
    x: 0,
    y: 0
  };

  let maxScrollNum = 0;

  window.addEventListener('scroll', () => {
    let percent = scrollY / maxScrollNum;
    let zValue = percent * 980;

    space.style.transform = `translateZ(${zValue - 490}vw)`;
    progressBar.style.width = `${percent * 100}%`;
  });

  window.addEventListener('mousemove', e => {
    // pageX, pageY 로 하면 전체 페이지 수치와 연관되어있어서 시점이 돌아가버림
    mousePos.x = e.clientX - (window.innerWidth / 2);
    mousePos.y = e.clientY - (window.innerHeight / 2);

    /* console.log(e.clientX, e.clientY, window.innerWidth / 2); */
    stage.style.transform = `rotateX(${mousePos.y / 130}deg) rotateY(${mousePos.x / 130}deg)`;
  });

  /* character class */
  class Character {
    constructor(position) {
      this.charEl = document.createElement('div');
      this.charEl.classList.add('character');
      this.charEl.innerHTML = `이미지 추가`;

      stage.appendChild(this.charEl);

      this.charEl.style.left = `${position.x}%`
      this.scrollState = false;
      this.init();
    };
  };
  
  Character.prototype.init = function() {
    window.addEventListener('scroll', () => {
      clearTimeout(this.scrollState);

      if (!this.scrollState) {
        this.charEl.classList.add('running');
      };
      
      this.scrollState = setTimeout(() => {
        this.scrollState = false;
        this.charEl.classList.remove('running');
      }, 500);
    });
  };

  stage.addEventListener('click', e => {
    new Character({
      x: (e.clientX / window.innerWidth) * 100
    });
  });

  const resizeHandler = () => {
    maxScrollNum = document.body.scrollHeight - window.innerHeight;
  };
  resizeHandler();

  window.addEventListener('resize', resizeHandler);  

  window.addEventListener('load', () => {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100);
  });

})();