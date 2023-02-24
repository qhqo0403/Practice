let curElementNumber = 1;
  
function randomColor() {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);

  return `rgb(${r}, ${g}, ${b})`;
}

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
      const newDataElement = document.createElement('div');
      newDataElement.style.backgroundColor = randomColor();
      curElementNumber++;
      newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
      document.body.append(newDataElement);
  }
}

window.addEventListener('scroll', scrollHandler);