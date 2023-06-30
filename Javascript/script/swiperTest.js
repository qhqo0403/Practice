const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 900,
  spaceBetween: 0,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', () => {
  swiper.autoplay.start();
});
stopBtn.addEventListener('click', () => {
  swiper.autoplay.stop();
});