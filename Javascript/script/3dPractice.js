(() => {
  const space = document.querySelector('.space');
  const progressBar = document.querySelector('.progress-bar');
  const stage = document.querySelector('.stage');

  const mousePos = {
    x: 0,
    y: 0
  };

  let maxScrollNum = 0;

  const resizeHandler = () => {
    maxScrollNum = document.body.scrollHeight - window.innerHeight;
  };

  window.addEventListener('scroll', () => {
    let percent = scrollY / maxScrollNum;
    let zValue = percent * 980;

    space.style.transform = `translateZ(${zValue - 490}vw)`;
    progressBar.style.width = `${percent * 100}%`;
  });

  window.addEventListener('mousemove', e => {
    mousePos.x = e.pageX - (window.innerWidth / 2);
    mousePos.y = e.pageY - (window.innerHeight / 2);

    stage.style.transform = `rotateX(${mousePos.y / 130}deg) rotateY(${mousePos.x / 130}deg)`;
  });

  window.addEventListener('resize', resizeHandler);

  resizeHandler();
})();