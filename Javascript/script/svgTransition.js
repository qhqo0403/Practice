// svg에 자바스크립트 코드를 적용하려면 img 태그가 아니라 object 태그를 사용해야함!

const svg = document.querySelector('.key');
const svgDoc = svg.contentDocument; // svg 문서 내부를 가져오는 방법

const keyBtn = svgDoc.querySelector('.key-btn');
const keyBlade = svgDoc.querySelector('.key-blade');

keyBtn.addEventListener('click', () => {
  keyBlade.classList.toggle('key-blade-filpped');
});