// svg에 자바스크립트 코드를 적용하려면 img 태그가 아니라 object 태그를 사용해야함!

const svg = document.querySelector('.key');
// svg 문서는 비동기식으로 가져오기 때문에 load 이벤트가 꼭 필요함
svg.addEventListener('load', () => {
  const svgDoc = svg.contentDocument; // svg 문서를 가져오는 방법

  const keyBtn = svgDoc.querySelector('.key-btn');
  const keyBlade = svgDoc.querySelector('.key-blade');

  keyBtn.addEventListener('click', () => {
    keyBlade.classList.toggle('key-blade-flipped');
  });
});