(() => {
  const actions = {
    birdFlies(key) {
      if (key) {
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
      } else {
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key) {
      if (key) {
        document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
      } else {
        document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
      }
    }
  };

  const graphicEls = document.querySelectorAll('.graphic-item');
  const stepEls = document.querySelectorAll('.step');
  let currentItem = graphicEls[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
    /* console.log(ioIndex); */
  });

  for (let i = 0; i < graphicEls.length; i++) {
    io.observe(stepEls[i]);
    graphicEls[i].dataset.index = i;
    stepEls[i].dataset.index = i;
  };

  const activate = (action) => {
    currentItem.classList.add('visible');
    if (action) {
      actions[action](true);
    }
  };

  const inActivate = (action) => {
    currentItem.classList.remove('visible');
    if (action) {
      actions[action](false);
    }
  };


  window.addEventListener('scroll', () => {
    let step;
    let boundingRect;

    /* for (let i = 0; i < stepEls.length; i++) { */
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepEls[i];
      if (!step) continue;
      boundingRect = step.getBoundingClientRect();

      if (boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
        inActivate(currentItem.dataset.action);
        currentItem = graphicEls[step.dataset.index];
        activate(currentItem.dataset.action);
      };
    };
  });

  activate();

  window.addEventListener('load', () => {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100)
  })
})();