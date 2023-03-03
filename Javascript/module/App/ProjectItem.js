/* import { Tooltip } from "./Tooltip.js"; */
import { DOMHelper } from "../Utility/DOMHelper.js";


export class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tootipText = projectElement.dataset.extraInfo;
    import('./Tooltip.js').then(module => {
      const tooltip = new module.Tooltip(() => {
      this.hasActiveTooltip = false;
      }, tootipText, this.id);
      tooltip.attach();
      this.hasActiveTooltip = true;
      }
    );
  }

  connectDrag() {
    document.getElementById(this.id).addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    })
  }

  connectMoreInfoBtn() {
    const projectItemEl = document.getElementById(this.id);
    let moreInfoBtn = projectItemEl.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this)); // 함수 내에서 같은 객체를 참조하도록 하기 위해서 bind
  };

  connectSwitchBtn(type) {
    const projectItemEl = document.getElementById(this.id);
    let switchBtn = projectItemEl.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListener(switchBtn);
    switchBtn.textContent = type === 'active' ? "Finish" : "Activate"
    switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchBtn(type);
  }
}
