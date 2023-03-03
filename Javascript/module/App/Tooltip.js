import { Component } from './Component.js'

export class Tooltip extends Component {
  constructor(closeNotifierFunc, text, hostElementId){
    super(hostElementId);
    this.closeNotifier = closeNotifierFunc;
    this.text = text;
    this.create();
  }
  
  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  }

  create() {
    const tooltipEl = document.createElement('div');
    tooltipEl.className = 'card';
    
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true); // HTML에서 작성된 노드를 복사함
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipEl.append(tooltipBody);
    
    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const scrollDistance = this.hostElement.parentElement.scrollTop; // scroll의 길이를 알아야 그에 따른 상대적인 위치값을 구할수 있음 -> 스크롤한 만큼 y의 값이 줄어듦

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - scrollDistance - 10;

    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = x + 'px';
    tooltipEl.style.top = y + 'px';

    tooltipEl.addEventListener('click', this.closeTooltip);
    this.element = tooltipEl;
  }

/*   detach() { // 항상 클래스 내를 참조하기 위해 화살표 함수 사용. 화살표 함수 안쓰려면 이벤트에 bind하기.
    this.element.remove();
    /* this.element.parentElement.removeChild(this.element); // 브라우저 지원까지 고려한다면 
  }

  attach() {
    const tooltipEl = document.createElement('div');
    tooltipEl.className = 'card';
    tooltipEl.innerText = 'DUMMY!';
    tooltipEl.addEventListener('click', this.closeTooltip);
    this.element = tooltipEl; // 요소를 삭제하려면 접근할 수 있어야 하기 때문에 특성으로 저장해주기
    document.body.append(tooltipEl);
  } */
}