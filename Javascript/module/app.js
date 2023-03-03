import { ProjectList } from './App/ProjectList.js'

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));

    document.getElementById('analytics-btn').addEventListener('click', this.startAnalytics)
  }

  static startAnalytics() {
    const analysticsScript = document.createElement('script');
    analysticsScript.src = 'assets/scripts/analystics.js';
    analysticsScript.defer = true;
    document.head.append(analysticsScript);
  }
}

App.init();