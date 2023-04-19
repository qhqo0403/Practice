import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hook/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  // const {isLoading, error, sendRequest} = useHttp; 를 줄여서 한번에 씀
  const {isLoading, error, sendRequest : fetchTasks} = useHttp('https://react-http-6b4a6.firebaseio.com/tasks.json', transformTasks);
  // 의존성을 최소화 하고 데이터 변환 과정을 컴포넌트 내부로 가져오기 위함
  useEffect(() => {
    const transformTasks = (teskObj) => {
      const loadedTasks = [];
  
      for (const taskKey in teskObj) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
  
      setTasks(loadedTasks);
    }
    fetchTasks('https://react-http-6b4a6.firebaseio.com/tasks.json', transformTasks);
  }, [fetchTasks]);
  // 컴포넌트가 재평가 될 때 마다 객체가 재생성되고 다시 함수를 호출하는 무한 루프에 빠지지 않도록 함수를 useCallback으로 만들고(매개변수를 직접 받아서 재생성 X) 의존성을 최소화함.


  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

/*   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */
/*   const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }; */
