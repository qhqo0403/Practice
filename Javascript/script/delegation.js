(() => {
  // 자식개체에 이벤트를 주는 경우 

  const childrens = document.querySelectorAll('button');
  // 버튼을 클릭하면 ui가 변경되거나 class가 추가될 때
  childrens.forEach(child => {
    child.addEventListener('click', () => {
      child.classList.add('active');
    });
  });
  // 자식개체의 수만큼 이벤트 리스너가 발생.
  // 이벤트 리스너가 여러개 발생하고, 새로운 자식개체가 동적으로 생성될 경우를 대비해 이벤트를 부모에 위임
  const parent = document.querySelector('div');

  const clickHandler = (e) => {
    if (e.target.classList.contains('someClass')) {
      e.target.classList.add('active');
    }
  };
  // 만약 부모개체에 자식개체가 여러개라서 e.target이 정확히 잡히지 않을 때
  // css 에서 pointer-events 속성을 none으로 해주거나 closest('selector')로 대상 지정해주기


  parent.addEventListener('click', clickHandler);
})();
