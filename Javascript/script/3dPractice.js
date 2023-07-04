(() => {
  const space = document.querySelector('.space');
  const progressBar = document.querySelector('.progress-bar');

  let maxScrollNum = 0;

  const resizeHandler = () => {
    maxScrollNum = document.body.scrollHeight - window.innerHeight;
  }

  window.addEventListener('scroll', () => {
    let percent = scrollY / maxScrollNum;
    let zValue = percent * 980;

    space.style.transform = `translateZ(${zValue - 490}vw)`;
    progressBar.style.width = `${percent * 100}%`;
  });

  window.addEventListener('resize', resizeHandler);

  resizeHandler();
})();