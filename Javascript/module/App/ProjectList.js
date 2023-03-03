import { ProjectItem } from './ProjectItem.js'
import { DOMHelper } from '../Utility/DOMHelper.js';

export class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems){
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
    this.connectDroppable();
    console.log(this.projects);
  }
  
  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain'){ // 특정 요소의 타입만 가져와서 일치하는 경우에만 드래그가 가능하도록 만들어줌
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });

    list.addEventListener('dragover', event => { // dragover는 필수(dragenter는 아님)
      if (event.dataTransfer.types[0] === 'text/plain'){
        event.preventDefault();
      }
    });

    list.addEventListener('dragleave', event => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list){
        list.parentElement.classList.remove('droppable');
      }
    });

    list.addEventListener('drop', event => {
      const prjId = event.dataTransfer.getData('text/plain');
      if (this.projects.find(p => p.id === prjId)) {
        list.parentElement.classList.remove('droppable');
        return;
      }
      document.getElementById(prjId).querySelector('button:last-of-type').click();
      list.parentElement.classList.remove('droppable'); // 추가되고 나서 클래스 지워주기
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    //console.log(this)
    this.projects.push(project)
    DOMHelper.moveEl(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    /* const projectIndex = this.projects.findIndex( p => p.id === projectId);
    this.projects.splice(projectIndex, 1); */
    //addProject() 를 추가할수 없는 이유는 같은 인스턴스에서 실행되기 때문, 의도는 기존 인스턴스에서 삭제된 다음 다른 인스턴스로 추가되어야 하기 때문에 같은 인스턴스에서 호출하는게 의미없음.
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}