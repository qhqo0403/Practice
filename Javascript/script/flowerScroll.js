(() => {
  const wrapper = document.querySelector('.wrapper');
  const img = wrapper.querySelector('img');

  let scrollNum = 0;

  window.addEventListener('scroll', () => {
    scrollNum = window.scrollY;

    let percent = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0);

    img.style.width = `${percent}%`;
    img.style.transform = `rotate(${scrollNum / 10}deg)`;
  });
})();