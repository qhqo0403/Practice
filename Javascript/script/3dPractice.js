(() => {
  const space = document.querySelector('.space');
  const progressBar = document.querySelector('.progress-bar');
  const stage = document.querySelector('.stage');
  const selectChar = document.querySelector('.select-character');

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
    constructor(data) {
      this.charEl = document.createElement('div');
      this.charEl.classList.add('character');
      this.charEl.innerHTML = `이미지추가`;

      stage.appendChild(this.charEl);
      this.xPos = data.x;
      this.charEl.style.left = `${this.xPos}%`
      this.scrollState = false;
      this.currentScroll = 0;
      this.speed = data.speed;
      this.direction;
      this.walking = false;
      this.requestId;
      this.init();
      this.keyEvent();
    };
  };
  // 스크롤 관련 메서드
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

      if (this.currentScroll > scrollY) {
        this.charEl.dataset.direction = 'backward';
      } else {
        this.charEl.dataset.direction = 'forward';
      }
      // 바로 이전값과 현재값을 비교하려면 if문 이후에 대입해줘야함!
      this.currentScroll = scrollY;

    });
  };
  // 키보드 이벤트 관련 메서드
  Character.prototype.keyEvent = function() {
    window.addEventListener('keydown', (e) => {
      if (this.walking) {
        return;
      }

      if (e.keyCode === 37) {
        this.direction = 'left';
        this.charEl.dataset.direction = 'left';
        this.charEl.classList.add('running');
        this.move();
        this.walking = true;
      } else if (e.keyCode === 39) {
        this.direction = 'right';
        this.charEl.dataset.direction = 'right';
        this.charEl.classList.add('running');
        this.move();
        this.walking = true;
      };
    });

    window.addEventListener('keyup', () => {
      this.charEl.classList.remove('running');
      this.walking = false;
      cancelAnimationFrame(this.requestId);
    });
  };
  // 부드러운 움직임
  Character.prototype.move = function() {
    if (this.direction === 'left') {
      this.xPos -= this.speed;
    } else {
      this.xPos += this.speed;
    }

    if (this.xPos < 2) {
      this.xPos = 2;
    }
    if (this.xPos > 88) {
      this.xPos = 88;
    }

    this.charEl.style.left = `${this.xPos}%`
    
    this.requestId = requestAnimationFrame(this.move.bind(this));
  };



  stage.addEventListener('click', e => {
    new Character({
      x: (e.clientX / window.innerWidth) * 100,
      speed: (Math.random() * 0.5) + 0.2
    });
  });

  selectChar.addEventListener('click', e => {
    const mode = e.target.dataset.char;
    document.body.dataset.char = mode;
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