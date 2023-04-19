import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hook/use-http';

const NewTask = (props) => {
  //App컴포넌트와 다르게 컴포넌트 재평가가 자주 일어나는게 아니라 폼이 제출될 때만 재평가 되므로 useCallback을 써서 재생성을 막아줄 필요가 없음!

  const {isLoading, error, sendRequest : sendTaskRequest} = useHttp();

  // 아래의 함수를 enteredTaskHandler에 넣어서 사용하는 방법도 있지만 bind 메서드로 데이터를 연결하는 방법임!
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({url: 'https://react-http-6b4a6.firebaseio.com/tasks.json', method: 'POST', headers: {'Content-Type': 'application/json'}, body: { text: taskText }}, createTask.bind(null, taskText));
  
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

  /*   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */

/* setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false); */